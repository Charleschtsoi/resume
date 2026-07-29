"use client";

import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { HomeHero } from "@/components/sections/HomeHero";
import { NowBuilding } from "@/components/sections/NowBuilding";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";
import { StrengthTabs } from "@/components/sections/StrengthTabs";
import { FeaturedWorkTeaser } from "@/components/sections/FeaturedWorkTeaser";
import { WritingSection } from "@/components/sections/WritingSection";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content">
        <HomeHero />
        <NowBuilding />
        <ValuePillars />
        <InteractiveTimeline />
        <StrengthTabs />
        <FeaturedWorkTeaser />
        <WritingSection />
        <HomeCTA />
      </main>
    </>
  );
}
