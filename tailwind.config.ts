import type { Config } from "tailwindcss";

// Dobeu Design System v3 tokens
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DS v3 brand palette: indigo (primary) + amber (accent)
        indigo: {
          DEFAULT: "#4f46e5",
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        amber: {
          DEFAULT: "#f59e0b",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        ink: "#1e1b4b",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
      },
      borderRadius: {
        ds: "0.875rem",
      },
      boxShadow: {
        ds: "0 10px 30px -12px rgba(79, 70, 229, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
