"use client";

import { useEffect, useMemo, useState } from "react";

type SkillCategory = "ai" | "product" | "technical" | "tools";

type Skill = {
  name: string;
  category: SkillCategory;
  color: string;
};

const CATEGORY_META: Record<
  SkillCategory | "all",
  { label: string; color: string }
> = {
  all: { label: "All Skills", color: "var(--game-cyan)" },
  ai: { label: "AI & ML", color: "#00d4ff" },
  product: { label: "Product", color: "#ffd700" },
  technical: { label: "Technical", color: "#b48cff" },
  tools: { label: "Tools", color: "#00ff88" },
};

const skills: Skill[] = [
  { name: "Machine Learning", category: "ai", color: "#00d4ff" },
  { name: "LLM Integration", category: "ai", color: "#00d4ff" },
  { name: "GenAI Systems", category: "ai", color: "#00d4ff" },
  { name: "Data Science", category: "ai", color: "#00d4ff" },
  { name: "Product Management", category: "product", color: "#ffd700" },
  { name: "Agile / Scrum", category: "product", color: "#ffd700" },
  { name: "Stakeholder Alignment", category: "product", color: "#ffd700" },
  { name: "Product Strategy", category: "product", color: "#ffd700" },
  { name: "Event-Driven Architecture", category: "technical", color: "#b48cff" },
  { name: "API Design (REST/JSON)", category: "technical", color: "#b48cff" },
  { name: "Next.js / React", category: "technical", color: "#b48cff" },
  { name: "Python", category: "technical", color: "#b48cff" },
  { name: "System Integration", category: "technical", color: "#b48cff" },
  { name: "Power Automate", category: "tools", color: "#00ff88" },
  { name: "ServiceNow", category: "tools", color: "#00ff88" },
  { name: "Dynatrace / Monitoring", category: "tools", color: "#00ff88" },
  { name: "JIRA / Confluence", category: "tools", color: "#00ff88" },
  { name: "Tableau / Visualization", category: "tools", color: "#00ff88" },
];

const FILTERS: Array<SkillCategory | "all"> = [
  "all",
  "ai",
  "product",
  "technical",
  "tools",
];

export default function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">(
    "all"
  );
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const filteredSkills = useMemo(
    () =>
      selectedCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === selectedCategory),
    [selectedCategory]
  );

  const categoryCounts = (Object.keys(CATEGORY_META) as Array<
    SkillCategory | "all"
  >)
    .filter((key) => key !== "all")
    .map((category) => ({
      category: category as SkillCategory,
      label: CATEGORY_META[category].label,
      color: CATEGORY_META[category].color,
      count: skills.filter((skill) => skill.category === category).length,
    }));

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Skill categories"
      >
        {FILTERS.map((filter) => {
          const active = selectedCategory === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(filter)}
              className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                active
                  ? "border-[var(--game-cyan)] bg-[var(--game-cyan)]/15 text-[var(--apple-black)]"
                  : "border-border bg-white/70 text-muted-foreground hover:border-[var(--game-cyan)]/50 hover:text-[var(--apple-black)]"
              }`}
            >
              {CATEGORY_META[filter].label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="game-card-light rounded-2xl p-5">
          <p className="font-game text-[10px] tracking-wider text-[var(--apple-blue)] uppercase">
            Skills
          </p>
          <p className="mt-2 text-3xl font-semibold text-[var(--apple-black)]">
            {filteredSkills.length}
          </p>
        </div>
        <div className="game-card-light rounded-2xl p-5">
          <p className="font-game text-[10px] tracking-wider text-[var(--apple-blue)] uppercase">
            Category
          </p>
          <p className="mt-2 text-xl font-semibold text-[var(--apple-black)]">
            {CATEGORY_META[selectedCategory].label}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="game-card-light flex items-center gap-3 rounded-2xl p-4 transition hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.45s ease ${index * 40}ms, transform 0.45s ease ${index * 40}ms`,
            }}
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: skill.color }}
              aria-hidden
            />
            <p className="text-sm font-medium text-[var(--apple-black)]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="game-card-light rounded-2xl p-6">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          By category
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCounts.map((item) => (
            <div key={item.category} className="text-center">
              <p
                className="text-2xl font-semibold"
                style={{ color: item.color }}
              >
                {item.count}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
