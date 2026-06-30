export type CompanyIconSlug =
  | "aahk"
  | "apple"
  | "accenture"
  | "hkjc"
  | "watson"
  | "cathay";

export type CompanyIconMeta = {
  slug: CompanyIconSlug;
  label: string;
  accent: string;
  /** Asset path under /public — defaults to /companies/{slug}.svg */
  src?: string;
  /** Use wider card for logos with wordmark */
  wide?: boolean;
};

const companyIconMeta: Record<string, CompanyIconMeta> = {
  "Airport Authority Hong Kong": {
    slug: "aahk",
    label: "Airport Authority Hong Kong",
    accent: "#99b9bf",
    src: "/companies/aahk.png",
    wide: true,
  },
  Apple: {
    slug: "apple",
    label: "Apple",
    accent: "#1d1d1f",
  },
  Accenture: {
    slug: "accenture",
    label: "Accenture",
    accent: "#a100ff",
  },
  "The Hong Kong Jockey Club": {
    slug: "hkjc",
    label: "The Hong Kong Jockey Club",
    accent: "#003366",
  },
  "A.S. Watson Group": {
    slug: "watson",
    label: "A.S. Watson Group",
    accent: "#00a0a8",
  },
  "Cathay Pacific Airways": {
    slug: "cathay",
    label: "Cathay Pacific Airways",
    accent: "#006564",
  },
};

export function getCompanyIcon(company: string): CompanyIconMeta {
  return (
    companyIconMeta[company] ?? {
      slug: "accenture",
      label: company,
      accent: "#0071e3",
    }
  );
}
