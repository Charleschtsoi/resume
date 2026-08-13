"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { writingArticles } from "@/content/homepage";
import { fadeInView } from "@/lib/motion";

export function WritingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="writing"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="section-label"
        >
          Writing
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          Thinking in public.
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 max-w-2xl text-base text-muted-foreground"
        >
          Notes on GenAI systems, transformers, and multimodal AI — published on Medium.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {writingArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="border border-border bg-white flex h-full flex-col rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold leading-snug text-[var(--apple-black)]">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.summary}
              </p>
              <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm text-[var(--apple-blue)] hover:underline"
              >
                Read on Medium
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
