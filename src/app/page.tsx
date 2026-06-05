"use client";

import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { HomeHero } from "@/components/sections/HomeHero";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";
import { StrengthTabs } from "@/components/sections/StrengthTabs";
import { FeaturedWorkTeaser } from "@/components/sections/FeaturedWorkTeaser";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content">
        <HomeHero />
        <ValuePillars />
        <InteractiveTimeline />
        <StrengthTabs />
        <FeaturedWorkTeaser />
        <HomeCTA />
      </main>
    </>
  );
}
