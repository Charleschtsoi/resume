import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
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

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.seoTitle}`,
  description: profile.seoDescription,
  openGraph: {
    title: `${profile.name} — ${profile.seoTitle}`,
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
    <html lang="en" className={`${inter.variable} ${pressStart.variable} h-full`}>
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
