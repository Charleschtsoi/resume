"use client";

import { useEffect, useState } from "react";

type MediumPost = {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  thumbnail?: string;
};

function truncateText(text: string, maxLength: number) {
  const cleaned = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trim()}…`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

type MediumFeed = {
  posts: MediumPost[];
  note?: string;
};

async function loadMediumPosts(): Promise<MediumFeed> {
  const response = await fetch("/api/medium");
  const data = (await response.json()) as {
    posts?: MediumPost[];
    error?: string;
    meta?: { note?: string; totalCount?: number };
  };

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch Medium posts");
  }

  return {
    posts: data.posts ?? [],
    note: data.meta?.note,
  };
}

function SkeletonCard() {
  return (
    <div className="border border-border bg-white animate-pulse rounded-2xl p-6">
      <div className="mb-4 flex gap-2">
        <div className="h-5 w-14 rounded bg-black/10" />
        <div className="h-5 w-16 rounded bg-black/10" />
      </div>
      <div className="h-6 w-4/5 rounded bg-black/10" />
      <div className="mt-3 h-4 w-full rounded bg-black/10" />
      <div className="mt-2 h-4 w-3/4 rounded bg-black/10" />
      <div className="mt-6 flex justify-between">
        <div className="h-4 w-24 rounded bg-black/10" />
        <div className="h-4 w-12 rounded bg-black/10" />
      </div>
    </div>
  );
}

export default function MediumBlog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const feed = await loadMediumPosts();
        if (cancelled) return;
        setPosts(feed.posts);
        setNote(feed.note ?? "");
        setError("");
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "Failed to fetch Medium posts"
        );
        setPosts([]);
        setNote("");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  function handleRetry() {
    setLoading(true);
    setError("");
    setRetryCount((count) => count + 1);
  }

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="border border-border bg-white rounded-2xl p-8 text-center"
      >
        <p className="text-[var(--apple-black)]">✗ {error}</p>
        <button
          type="button"
          onClick={handleRetry}
          className="mt-4 rounded-lg bg-[var(--apple-blue)] px-5 py-2 text-sm font-medium text-white hover:bg-[var(--apple-blue-hover)]"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="border border-border bg-white flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Published Articles:{" "}
            <span className="font-semibold text-[var(--apple-black)]">
              {posts.length}
            </span>
          </p>
          {note ? (
            <p className="mt-1 max-w-xl text-xs text-muted-foreground/80">
              {note}
            </p>
          ) : null}
        </div>
        <a
          href="https://medium.com/@charleschtsoi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--apple-blue)] hover:underline"
        >
          View All on Medium
        </a>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No published articles found yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-border bg-white flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1"
            >
              {post.categories.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.categories.slice(0, 3).map((category) => (
                    <span
                      key={`${post.id}-${category}`}
                      className="text-xs text-muted-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="text-lg font-semibold leading-snug text-[var(--apple-black)]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {truncateText(post.description, 150)}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <time
                  dateTime={post.pubDate}
                  className="text-xs text-muted-foreground"
                >
                  {formatDate(post.pubDate)}
                </time>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--apple-blue)] hover:underline"
                >
                  Read
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
