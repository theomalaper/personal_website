"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const ANCHOR_LINKS = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#find-me", id: "find-me" },
];

const SECTION_IDS = ANCHOR_LINKS.map((l) => l.id);

export function Header() {
  const pathname = usePathname();
  const [scrollSection, setScrollSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = pathname === "/" ? scrollSection : "";

  useEffect(() => {
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      // Use a more lenient margin for the last section (find-me)
      const margin = id === "find-me"
        ? "-20% 0px -20% 0px"
        : "-40% 0px -55% 0px";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setScrollSection(id);
        },
        { rootMargin: margin }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isWritingActive = pathname === "/blog";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300 dark:border-stone-800 bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-stone-600 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          portfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {ANCHOR_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={clsx(
                "text-xs font-mono transition-colors",
                activeSection === link.id
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400"
              )}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/blog"
            className={clsx(
              "text-xs font-mono transition-colors",
              isWritingActive
                ? "text-orange-600 dark:text-orange-400"
                : "text-stone-400 dark:text-stone-500 hover:text-orange-600 dark:hover:text-orange-400"
            )}
          >
            Writing
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-stone-500 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-300 dark:border-stone-800 bg-[var(--background)]">
          <nav className="max-w-2xl mx-auto px-6 py-3 flex flex-col gap-4">
            {ANCHOR_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "text-sm font-mono transition-colors",
                  activeSection === link.id
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-stone-500 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400"
                )}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "text-sm font-mono transition-colors",
                isWritingActive
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-stone-500 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400"
              )}
            >
              Writing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
