"use client";

import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { HomeHero } from "@/components/sections/HomeHero";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";
import { FeaturedWorkTeaser } from "@/components/sections/FeaturedWorkTeaser";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content">
        <HomeHero />
        <InteractiveTimeline />
        <FeaturedWorkTeaser />
        <HomeCTA />
      </main>
    </>
  );
}
