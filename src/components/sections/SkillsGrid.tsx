"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillCategories } from "@/content/resume";
import { staggerChild } from "@/lib/motion";

type SkillCategory = (typeof skillCategories)[number];

type SkillsGridProps = {
  categories: SkillCategory[];
  education: { school: string; degree: string; period: string; focus: string }[];
  certifications: string[];
};

export function SkillsGrid({ categories, education, certifications }: SkillsGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {categories.map((cat, i) => (
          <motion.section
            key={cat.title}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            custom={i}
            variants={staggerChild}
            className="game-card-light rounded-2xl p-8"
          >
            <h2 className="text-lg font-semibold text-[var(--apple-black)]">
              {cat.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground before:mr-2 before:text-[var(--game-cyan)] before:content-['▸']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      <motion.section
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChild}
        custom={0}
        className="mt-16"
      >
        <h2 className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Education
        </h2>
        <div className="mt-6 space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="game-card-light rounded-2xl p-6"
            >
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-muted-foreground">{edu.degree}</p>
              {edu.period && (
                <p className="mt-1 text-sm text-muted-foreground">{edu.period}</p>
              )}
              {edu.focus && (
                <p className="mt-2 text-sm">Focus: {edu.focus}</p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChild}
        custom={1}
        className="mt-16"
      >
        <h2 className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Certifications
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="rounded-full border border-[var(--game-border)]/40 bg-white px-4 py-2 text-sm text-muted-foreground"
            >
              {cert}
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
