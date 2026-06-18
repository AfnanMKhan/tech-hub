import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        brand: "#1b6dff",
        market: "#ffb703",
        mint: "#15b88a"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(18,18,18,.10)"
      }
    }
  },
  plugins: []
};

export default config;
