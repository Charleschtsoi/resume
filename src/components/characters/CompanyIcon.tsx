"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { getCompanyIcon } from "@/components/characters/company-icon-map";
import { cn } from "@/lib/utils";

type CompanyIconProps = {
  company: string;
  className?: string;
  size?: "sm" | "md";
};

const sizeMap = {
  sm: 56,
  md: 72,
};

export function CompanyIcon({ company, className, size = "md" }: CompanyIconProps) {
  const reduceMotion = useReducedMotion();
  const dim = sizeMap[size];
  const { slug, label, accent, src, wide } = getCompanyIcon(company);
  const imageSrc = src ?? `/companies/${slug}.svg`;
  const cardWidth = wide ? dim + 64 : dim + 16;
  const cardHeight = dim + 16;
  const imageWidth = wide ? dim + 48 : dim;
  const imageHeight = dim;

  const icon = (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-sm"
      style={{ width: cardWidth, height: cardHeight }}
    >
      <Image
        src={imageSrc}
        alt={`${label} logo`}
        width={imageWidth}
        height={imageHeight}
        className="object-contain"
      />
    </div>
  );

  if (reduceMotion) {
    return <div className={cn("shrink-0", className)}>{icon}</div>;
  }

  return (
    <motion.div
      className={cn("shrink-0", className)}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 0 2px ${accent}33`,
      }}
    >
      {icon}
    </motion.div>
  );
}
