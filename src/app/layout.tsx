import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteNav } from "@/components/layout/SiteNav";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageFooter } from "@/components/layout/PageFooter";
import { PresenterShell } from "@/components/providers/PresenterShell";
import { profile } from "@/content/resume";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — AI Product Owner & Solutions Architecture`,
  description:
    "12+ years bridging business strategy and engineering execution. Apple, Airport Authority HK, HKJC. AI agents, regulated systems, PoC to production.",
  openGraph: {
    title: `${profile.name} — AI Product Owner`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full">
        <PresenterShell>
          <SkipLink />
          <SiteNav />
          {children}
          <PageFooter />
        </PresenterShell>
      </body>
    </html>
  );
}
