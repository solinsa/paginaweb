"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import SearchDialog from "@/components/ui/SearchDialog";

interface TopNavBarProps {
  activeRoute?: string;
}

const NAV_ITEMS = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Industrias", href: "/industrias" },
  { label: "Aplicaciones", href: "/aplicaciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export default function TopNavBar({ activeRoute = "" }: TopNavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full transition-shadow duration-300",
          scrolled ? "shadow-[0px_12px_32px_rgba(0,30,64,0.06)]" : ""
        )}
      >
        <div className="bg-surface/80 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center px-8">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-2xl font-bold uppercase tracking-tighter text-on-surface"
            >
              SOLINSA
            </Link>

            {/* Center: Desktop nav links */}
            <nav className="ml-12 hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeRoute === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-sm font-medium transition-colors",
                      isActive
                        ? "border-b-2 border-secondary text-secondary font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors"
                aria-label="Buscar"
              >
                <span className="material-symbols-outlined text-xl">search</span>
              </button>

              {/* CTA button */}
              <Link
                href="/contacto"
                className="hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-container sm:inline-flex"
              >
                Consultoria
              </Link>

              {/* Mobile hamburger */}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        activeRoute={activeRoute}
      />

      {/* Search dialog */}
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  );
}
