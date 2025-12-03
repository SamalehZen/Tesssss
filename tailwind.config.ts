import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        "background-secondary": "#1A1A1A",
        primary: "#E91E63",
        secondary: "#9C27B0",
        "text-primary": "#FFFFFF",
        "text-secondary": "#9E9E9E",
        "status-active": "#4CAF50",
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2D1F2D 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
