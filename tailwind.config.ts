import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00167a",
          50: "#e6e8f5",
          100: "#ccd1eb",
          200: "#99a3d7",
          300: "#6675c3",
          400: "#3347af",
          500: "#00199b",
          600: "#00167a",
          700: "#00115c",
          800: "#000c3d",
          900: "#00061f",
        },
        accent: {
          DEFAULT: "#FF6B35",
          50: "#FFE8E1",
          100: "#FFD4C8",
          200: "#FFAC96",
          300: "#FF8464",
          400: "#FF6B35",
          500: "#FF5722",
          600: "#E64A19",
          700: "#D84315",
          800: "#BF360C",
          900: "#8B2A0A",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam 3s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "border-beam": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(200%)",
          },
        },
      },
      backgroundImage: {
        "grid-white":
          "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
