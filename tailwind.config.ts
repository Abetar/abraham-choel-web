import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4f8",
          100: "#d8e6ef",
          500: "#2d5d7b",
          700: "#173d59",
          900: "#0b2438"
        },
        slateAcademic: "#f4f7f9",
        ink: "#17212b"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-merriweather)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
