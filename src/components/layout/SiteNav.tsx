"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile, navLinks } from "@/content/resume";
import { usePresenterMode } from "@/lib/presenter-mode";
import { Button } from "@/components/ui/button";

const detailLinks = navLinks.filter(
  (l) => l.href !== "/" && l.href !== "/contact"
);

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { isPresenterMode, togglePresenterMode } = usePresenterMode();
  const isHome = pathname === "/";
  const minimalNav = isPresenterMode && isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClassName = `fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
    scrolled
      ? "border-b border-white/10 bg-[var(--apple-black)]/80 backdrop-blur-xl"
      : "bg-transparent"
  }`;

  if (reduceMotion) {
    return (
      <header className={navClassName}>
        <NavInner
          pathname={pathname}
          isHome={isHome}
          minimalNav={minimalNav}
          isPresenterMode={isPresenterMode}
          onTogglePresent={togglePresenterMode}
        />
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={navClassName}
    >
      <NavInner
        pathname={pathname}
        isHome={isHome}
        minimalNav={minimalNav}
        isPresenterMode={isPresenterMode}
        onTogglePresent={togglePresenterMode}
      />
    </motion.header>
  );
}

function NavInner({
  pathname,
  isHome,
  minimalNav,
  isPresenterMode,
  onTogglePresent,
}: {
  pathname: string;
  isHome: boolean;
  minimalNav: boolean;
  isPresenterMode: boolean;
  onTogglePresent: () => void;
}) {
  const visibleLinks = minimalNav
    ? navLinks.filter((l) => l.href === "/" || l.href === "/contact")
    : navLinks;

  return (
    <>
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 md:h-16 md:px-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--apple-gray-100)] md:text-base"
        >
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {visibleLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-[var(--apple-blue)]"
                    : "text-[var(--apple-gray-300)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {minimalNav && (
            <details className="relative group">
              <summary className="cursor-pointer list-none text-sm text-[var(--apple-gray-300)] hover:text-white">
                Details
              </summary>
              <div className="absolute top-full left-0 mt-2 min-w-[140px] rounded-lg border border-white/10 bg-[var(--apple-black)] py-2 shadow-xl">
                {detailLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-[var(--apple-gray-300)] hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {isHome && (
            <button
              type="button"
              onClick={onTogglePresent}
              aria-pressed={isPresenterMode}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                isPresenterMode
                  ? "border-[var(--apple-blue)] bg-[var(--apple-blue)] text-white"
                  : "border-white/20 text-[var(--apple-gray-300)] hover:border-white/40"
              }`}
            >
              {isPresenterMode ? "Presenting" : "Present"}
            </button>
          )}
          <span className="hidden rounded-full border border-[var(--apple-blue)]/40 bg-[var(--apple-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--apple-blue)] lg:inline">
            {profile.roleFocus}
          </span>
          {!minimalNav && (
            <Button
              asChild
              size="sm"
              className="hidden bg-[var(--apple-blue)] text-white hover:bg-[var(--apple-blue-hover)] sm:inline-flex"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          )}
        </div>
      </div>

      <nav
        aria-label="Mobile"
        className="flex justify-center gap-4 border-t border-white/5 px-4 py-2 md:hidden"
      >
        {visibleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-[var(--apple-gray-300)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
