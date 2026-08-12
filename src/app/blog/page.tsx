import type { Metadata } from "next";
import MediumBlog from "@/components/MediumBlog";
import { profile } from "@/content/resume";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description:
    "Notes on GenAI systems, transformers, and multimodal AI — published on Medium.",
};

export default function BlogPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16"
    >
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Writing
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Thinking in public.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Notes on GenAI systems, transformers, and multimodal AI — published on
          Medium. Latest posts sync from Medium; older stories are kept in the
          site archive because Medium&apos;s RSS feed only returns the newest
          ~10.
        </p>

        <div className="mt-12">
          <MediumBlog />
        </div>
      </div>
    </main>
  );
}
