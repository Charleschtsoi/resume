import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";
import { mediumArchivePosts } from "@/content/medium-archive";

type MediumPost = {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  thumbnail?: string;
};

type RssItem = {
  title?: string[];
  link?: string[];
  guid?: Array<string | { _: string }>;
  pubDate?: string[];
  description?: string[];
  category?: string[];
  "content:encoded"?: string[];
};

const MEDIUM_USERNAME = "charleschtsoi";
const GRAPHQL_PAGE_LIMIT = 25;

function extractThumbnail(html?: string) {
  if (!html) return undefined;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function asText(value: string | { _: string } | undefined) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value._ ?? "";
}

function postKey(post: Pick<MediumPost, "id" | "link">) {
  const fromLink = post.link.match(/([a-f0-9]{10,12})(?:\?|$)/i)?.[1];
  if (fromLink) return fromLink.toLowerCase();
  const fromId = post.id.match(/([a-f0-9]{10,12})$/i)?.[1];
  if (fromId) return fromId.toLowerCase();
  return post.link.replace(/\?.*$/, "").toLowerCase();
}

function mergePosts(...groups: MediumPost[][]) {
  const byKey = new Map<string, MediumPost>();

  for (const group of groups) {
    for (const post of group) {
      const key = postKey(post);
      const existing = byKey.get(key);
      if (!existing) {
        byKey.set(key, post);
        continue;
      }
      // Prefer richer descriptions / categories from RSS when available.
      byKey.set(key, {
        ...existing,
        ...post,
        description: post.description || existing.description,
        categories:
          post.categories.length > 0 ? post.categories : existing.categories,
        thumbnail: post.thumbnail || existing.thumbnail,
      });
    }
  }

  return Array.from(byKey.values()).sort((a, b) => {
    const aTime = Date.parse(a.pubDate) || 0;
    const bTime = Date.parse(b.pubDate) || 0;
    return bTime - aTime;
  });
}

async function fetchViaRss(): Promise<MediumPost[]> {
  const response = await fetch(
    `https://medium.com/feed/@${MEDIUM_USERNAME}`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ResumeSite/1.0)",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`RSS fetch failed with ${response.status}`);
  }

  const xml = await response.text();
  const parsed = (await parseStringPromise(xml)) as {
    rss?: { channel?: Array<{ item?: RssItem[] }> };
  };

  const items = parsed.rss?.channel?.[0]?.item ?? [];
  return items.map((item, index) => {
    const description =
      item.description?.[0] ?? item["content:encoded"]?.[0] ?? "";
    const guidValue = asText(item.guid?.[0]);

    return {
      id: guidValue || item.link?.[0] || `post-${index}`,
      title: item.title?.[0] ?? "Untitled",
      link: item.link?.[0] ?? `https://medium.com/@${MEDIUM_USERNAME}`,
      pubDate: item.pubDate?.[0] ?? "",
      description,
      categories: item.category ?? [],
      thumbnail: extractThumbnail(description),
    };
  });
}

/**
 * Medium GraphQL can return the full profile stream (paginated).
 * Often blocked by Cloudflare from some hosts — caller should fall back to RSS.
 */
async function fetchViaGraphql(): Promise<MediumPost[] | null> {
  const query = `
    query UserStreamOverview($userId: ID!, $pagingOptions: PagingOptions) {
      user(username: $userId) {
        profileStreamConnection(paging: $pagingOptions) {
          pagingInfo {
            next { to }
          }
          stream {
            itemType {
              __typename
              ... on StreamItemPostPreview {
                post {
                  id
                  mediumUrl
                  title
                  firstPublishedAt
                  previewContent { subtitle }
                  tags { id }
                }
              }
            }
          }
        }
      }
    }
  `;

  const posts: MediumPost[] = [];
  let cursor: string | null = String(Date.now());
  let pages = 0;

  while (cursor && pages < 8) {
    pages += 1;
    const response = await fetch("https://medium.com/_/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (compatible; ResumeSite/1.0; +https://charleschtsoi.vercel.app)",
        Origin: "https://medium.com",
        Referer: `https://medium.com/@${MEDIUM_USERNAME}`,
      },
      body: JSON.stringify({
        operationName: "UserStreamOverview",
        query,
        variables: {
          userId: MEDIUM_USERNAME,
          pagingOptions: {
            limit: GRAPHQL_PAGE_LIMIT,
            to: cursor,
          },
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;

    const payload = (await response.json()) as {
      data?: {
        user?: {
          profileStreamConnection?: {
            pagingInfo?: { next?: { to?: string } | null };
            stream?: Array<{
              itemType?: {
                __typename?: string;
                post?: {
                  id: string;
                  mediumUrl: string;
                  title: string;
                  firstPublishedAt: number | string;
                  previewContent?: { subtitle?: string };
                  tags?: Array<{ id: string }>;
                };
              };
            }>;
          };
        };
      };
    };

    const connection = payload.data?.user?.profileStreamConnection;
    if (!connection) return null;

    const pagePosts = (connection.stream ?? [])
      .map((item) => item.itemType?.post)
      .filter((post): post is NonNullable<typeof post> => Boolean(post))
      .map((post) => {
        const published =
          typeof post.firstPublishedAt === "number"
            ? new Date(post.firstPublishedAt).toISOString()
            : String(post.firstPublishedAt);

        return {
          id: post.id,
          title: post.title,
          link: post.mediumUrl,
          pubDate: published,
          description: post.previewContent?.subtitle ?? "",
          categories: (post.tags ?? []).map((tag) => tag.id),
        } satisfies MediumPost;
      });

    posts.push(...pagePosts);

    if (pagePosts.length < GRAPHQL_PAGE_LIMIT) break;
    cursor = connection.pagingInfo?.next?.to ?? null;
  }

  return posts.length > 0 ? posts : null;
}

export async function GET() {
  try {
    const archivePosts: MediumPost[] = mediumArchivePosts.map((post) => ({
      ...post,
    }));

    let livePosts: MediumPost[] = [];
    let source: "graphql" | "rss" = "rss";

    try {
      const graphqlPosts = await fetchViaGraphql();
      if (graphqlPosts && graphqlPosts.length > 0) {
        livePosts = graphqlPosts;
        source = "graphql";
      }
    } catch {
      // Fall through to RSS.
    }

    if (livePosts.length === 0) {
      livePosts = await fetchViaRss();
      source = "rss";
    }

    // Medium RSS is hard-capped at ~10 latest items. Archive fills older stories.
    const posts = mergePosts(livePosts, archivePosts);

    return NextResponse.json(
      {
        posts,
        meta: {
          source,
          liveCount: livePosts.length,
          archiveCount: archivePosts.length,
          totalCount: posts.length,
          note:
            source === "rss"
              ? "Medium RSS returns only the latest ~10 posts; older stories are merged from the site archive."
              : "Fetched via Medium GraphQL profile stream, merged with site archive.",
        },
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to load Medium posts.", posts: [] },
      { status: 500 }
    );
  }
}
