/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
        card: "#1a1a1a",

        accent: "#facc15", // gold
        accentHover: "#fde047",

        textPrimary: "#ffffff",
        textSecondary: "#b3b3b3",

        borderTheme: "#2a2a2a",
      },
    },
  },
  plugins: [],
};