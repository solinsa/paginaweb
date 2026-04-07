"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeRoute?: string;
}

const NAV_ITEMS = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Aplicaciones", href: "/aplicaciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export default function MobileMenu({ isOpen, onClose, activeRoute }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 bg-surface-container-lowest shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-6 py-5">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-colors"
            aria-label="Cerrar menu"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4">
          {NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 border-b border-outline-variant/30 px-4 py-4 text-base font-medium transition-colors",
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA at bottom */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <Link
            href="/contacto"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-container"
          >
            Consultoria
          </Link>
        </div>
      </div>
    </>
  );
}
