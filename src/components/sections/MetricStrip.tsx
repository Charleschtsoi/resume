import type { ChapterMetric } from "@/content/resume";

type MetricStripProps = {
  metrics: ChapterMetric[];
  variant?: "dark" | "light";
};

export function MetricStrip({ metrics, variant = "light" }: MetricStripProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`mt-10 grid gap-4 sm:grid-cols-3 ${isDark ? "text-[var(--apple-gray-100)]" : "text-[var(--apple-black)]"}`}
      role="list"
      aria-label="Key metrics"
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          role="listitem"
          className={`rounded-xl px-5 py-4 ${
            isDark ? "game-card" : "game-card-light"
          }`}
        >
          <p className="font-game text-xl tracking-tight text-[var(--game-gold)] md:text-2xl">
            {metric.value}
          </p>
          <p
            className={`mt-1 text-sm leading-snug ${isDark ? "text-[var(--apple-gray-300)]" : "text-muted-foreground"}`}
          >
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
