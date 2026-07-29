export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        crimson: {
          DEFAULT: "#d4af37",
          light: "#f0d060",
          dark: "#b8941f",
          lighter: "#c9a84c",
        },
        gold: {
          DEFAULT: "#991b1b",
          light: "#b91c1c",
          dark: "#7f1d1d",
          muted: "#fecaca",
        },
        sapphire: {
          DEFAULT: "#2563EB",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          dark: "#0a0a0a",
        },
        ivory: {
          DEFAULT: "#fafaf5",
          light: "#fdfdf8",
        },
        darkbg: {
          DEFAULT: "#0a0505",
          light: "#0f0a0a",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}