import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "JetBrains Mono, system-ui, sans-serif",
      },
      colors: {
        bodyColor: "#1c1c22",
        lightSky: "#004AAD",
        hoverColor: "#003B8A",
        darkLightSky: "#1E3A8A",
        darkHoverColor: "#153270",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};

export default config;
