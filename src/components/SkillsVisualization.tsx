"use client";

import { useEffect, useMemo, useState } from "react";

type SkillCategory = "ai" | "product" | "technical" | "tools";

type Skill = {
  name: string;
  level: number;
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
  { name: "Machine Learning", level: 85, category: "ai", color: "#00d4ff" },
  { name: "LLM Integration", level: 90, category: "ai", color: "#00d4ff" },
  { name: "GenAI Systems", level: 88, category: "ai", color: "#00d4ff" },
  { name: "Data Science", level: 82, category: "ai", color: "#00d4ff" },
  { name: "Product Management", level: 92, category: "product", color: "#ffd700" },
  { name: "Agile / Scrum", level: 90, category: "product", color: "#ffd700" },
  { name: "Stakeholder Alignment", level: 88, category: "product", color: "#ffd700" },
  { name: "Product Strategy", level: 86, category: "product", color: "#ffd700" },
  { name: "Event-Driven Architecture", level: 88, category: "technical", color: "#b48cff" },
  { name: "API Design (REST/JSON)", level: 90, category: "technical", color: "#b48cff" },
  { name: "Next.js / React", level: 84, category: "technical", color: "#b48cff" },
  { name: "Python", level: 80, category: "technical", color: "#b48cff" },
  { name: "System Integration", level: 87, category: "technical", color: "#b48cff" },
  { name: "Power Automate", level: 82, category: "tools", color: "#00ff88" },
  { name: "ServiceNow", level: 78, category: "tools", color: "#00ff88" },
  { name: "Dynatrace / Monitoring", level: 80, category: "tools", color: "#00ff88" },
  { name: "JIRA / Confluence", level: 90, category: "tools", color: "#00ff88" },
  { name: "Tableau / Visualization", level: 75, category: "tools", color: "#00ff88" },
];

const FILTERS: Array<SkillCategory | "all"> = [
  "all",
  "ai",
  "product",
  "technical",
  "tools",
];

function CircularChart({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 96 96" aria-hidden>
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="rgba(42, 58, 90, 0.5)"
            strokeWidth="8"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[var(--apple-black)]">
          {value}%
        </span>
      </div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

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

  const averageLevel = Math.round(
    filteredSkills.reduce((sum, skill) => sum + skill.level, 0) /
      Math.max(filteredSkills.length, 1)
  );

  const categoryAverages = (Object.keys(CATEGORY_META) as Array<
    SkillCategory | "all"
  >)
    .filter((key) => key !== "all")
    .map((category) => {
      const items = skills.filter((skill) => skill.category === category);
      const avg = Math.round(
        items.reduce((sum, skill) => sum + skill.level, 0) / Math.max(items.length, 1)
      );
      return {
        category: category as SkillCategory,
        label: CATEGORY_META[category].label,
        color: CATEGORY_META[category].color,
        value: avg,
      };
    });

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

      <div className="grid gap-4 sm:grid-cols-3">
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
            Avg Level
          </p>
          <p className="mt-2 text-3xl font-semibold text-[var(--apple-black)]">
            {averageLevel}%
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

      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="game-card-light rounded-2xl p-4 transition hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.45s ease ${index * 40}ms, transform 0.45s ease ${index * 40}ms`,
            }}
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-[var(--apple-black)]">
                {skill.name}
              </p>
              <p className="text-sm font-semibold" style={{ color: skill.color }}>
                {skill.level}%
              </p>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-[var(--apple-gray-100)] ring-1 ring-black/5">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: animated ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                  boxShadow: `0 0 12px ${skill.color}55`,
                  transitionDelay: `${index * 40}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="game-card-light rounded-2xl p-6">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Skills Distribution
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-around gap-6">
          {categoryAverages.map((item) => (
            <CircularChart
              key={item.category}
              label={item.label}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
