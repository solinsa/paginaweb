import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes without conflicts.
 *
 * Usage:
 *   cn("px-4 py-2", condition && "bg-primary", "px-6")
 *   → "py-2 bg-primary px-6"  (px-6 wins over px-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
