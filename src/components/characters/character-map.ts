export type BossVariant = "airport" | "tech" | "corporate" | "arena" | "airline";

export function getBossVariant(company: string): BossVariant {
  const name = company.toLowerCase();

  if (name.includes("airport authority") || name.includes("aahk")) {
    return "airport";
  }
  if (name.includes("apple")) {
    return "tech";
  }
  if (name.includes("jockey club") || name.includes("hkjc")) {
    return "arena";
  }
  if (name.includes("cathay")) {
    return "airline";
  }
  return "corporate";
}
