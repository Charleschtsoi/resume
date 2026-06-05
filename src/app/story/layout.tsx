import type { Metadata } from "next";
import { profile } from "@/content/resume";

export const metadata: Metadata = {
  title: `Career Story — ${profile.name}`,
  description:
    "Scroll narrative: product delivery to systems architecture to AI — 12+ years at Cathay, HKJC, Apple, and AAHK.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
