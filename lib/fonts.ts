import { Manrope, Inter } from "next/font/google";

/**
 * Font Configuration — Solinsa / Stitch Design System
 *
 * - Manrope: Headlines (400–800). Geometric, modern tech feel.
 * - Inter:   Body text & labels (300–700). Engineered, technical.
 *
 * Both fonts use CSS custom properties so Tailwind v4 @theme can reference them:
 *   --font-heading → var(--font-manrope)
 *   --font-body    → var(--font-inter)
 */

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Convenience: className string with both CSS variables applied.
 * Spread on the <html> element so all children inherit.
 */
export const fontVariables = `${manrope.variable} ${inter.variable}`;
