import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 Configuration
 *
 * In Tailwind v4, design tokens are defined via @theme blocks in CSS (globals.css).
 * This config file is intentionally minimal — it only handles content paths
 * and any plugin registrations needed.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
};

export default config;
