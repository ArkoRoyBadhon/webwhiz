import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "desktop-m": {max: "1680px"},
      "laptop-x": {max: "1440px"},
      "laptop-m": {max: "1280px"},
      lg: {max: "1170px"},
      md: {max: "991px"},
      sm: {max: "767px"},
      xs: {max: "414px"},
      xxs: {max: "375px"},
      default: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-black": "#130929",
        "blue-light": "#5F90F0",
        "blue-dark": "#185AD9",
        "color-paragraph": "#64656D",
        "light-orange": "#FF8C38",
        "orange": "#FBA017",
        "light-grey": "#E8EFFB"
      },
    },
  },
  plugins: [],
};
export default config;
