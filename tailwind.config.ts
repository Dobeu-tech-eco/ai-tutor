import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        "indigo-primary": "#6B5CE7",
        "indigo-slate":   "#5A4FAB",
        "indigo-deep":    "#4A3FA8",
        "amber-warm":     "#F4A261",
        "dark-surface":   "#1A1A2E",
        "dark-elevated":  "#242440",
        "dark-deeper":    "#0F0F1F",
      },
      borderRadius: {
        sm:   "6px",
        md:   "12px",
        lg:   "20px",
        pill: "999px",
      },
      boxShadow: {
        xs:   "0 1px 2px rgba(26,26,46,0.06)",
        sm:   "0 2px 6px rgba(26,26,46,0.08)",
        md:   "0 6px 18px rgba(26,26,46,0.10)",
        lg:   "0 16px 40px rgba(26,26,46,0.14)",
        "ring-indigo": "0 0 0 3px rgba(107,92,231,0.22)",
        "ring-amber":  "0 0 0 3px rgba(244,162,97,0.25)",
      },
      maxWidth: {
        "site": "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
