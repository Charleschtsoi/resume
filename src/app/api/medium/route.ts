import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

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

export async function GET() {
  const mediumUsername = "charleschtsoi";

  try {
    const response = await fetch(
      `https://medium.com/feed/@${mediumUsername}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; ResumeSite/1.0)",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Medium RSS feed.", posts: [] },
        { status: 502 }
      );
    }

    const xml = await response.text();
    const parsed = (await parseStringPromise(xml)) as {
      rss?: { channel?: Array<{ item?: RssItem[] }> };
    };

    const items = parsed.rss?.channel?.[0]?.item ?? [];
    const posts: MediumPost[] = items.map((item, index) => {
      const description =
        item.description?.[0] ?? item["content:encoded"]?.[0] ?? "";
      const guidValue = asText(item.guid?.[0]);

      return {
        id: guidValue || item.link?.[0] || `post-${index}`,
        title: item.title?.[0] ?? "Untitled",
        link: item.link?.[0] ?? `https://medium.com/@${mediumUsername}`,
        pubDate: item.pubDate?.[0] ?? "",
        description,
        categories: item.category ?? [],
        thumbnail: extractThumbnail(description),
      };
    });

    return NextResponse.json(
      { posts },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to parse Medium posts.", posts: [] },
      { status: 500 }
    );
  }
}
