import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1f6feb",
          navy: "#0b1f3a",
          light: "#e6f2ff",
          green: "#5ec48d"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(15, 60, 130, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
