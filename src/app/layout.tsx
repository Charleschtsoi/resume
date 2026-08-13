import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteNav } from "@/components/layout/SiteNav";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageFooter } from "@/components/layout/PageFooter";
import { PresenterShell } from "@/components/providers/PresenterShell";
import { profile } from "@/content/resume";
import "./globals.css";

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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className={`${GeistSans.className} min-h-full`}>
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
