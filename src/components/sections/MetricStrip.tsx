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
          className={`rounded-2xl border px-5 py-4 ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-border bg-white shadow-sm"
          }`}
        >
          <p className="text-2xl font-semibold tracking-tight text-[var(--apple-blue)] md:text-3xl">
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
