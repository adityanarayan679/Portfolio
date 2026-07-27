/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        crimson: {
          DEFAULT: "#991b1b",
          light: "#b91c1c",
          dark: "#7f1d1d",
          lighter: "#fecaca",
        },
        gold: {
          DEFAULT: "#d97706",
          light: "#f59e0b",
          dark: "#b45309",
        },
        darkbg: {
          DEFAULT: "#0a0505",
          light: "#0f0a0a",
        },
      },
    },
  },
  plugins: [],
}
