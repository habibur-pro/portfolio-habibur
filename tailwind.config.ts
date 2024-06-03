import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          // "primary": "#ff5d56",
          primary: "#BD10E0",
          secondary: "#494965",
          // "accent": "#37cdbe",
          accent: "#8e12fc",
          neutral: "#3d4451",
          "base-100": "#10101a",
        },
      },
      "light",
      "dark",
    ],
  },
};
export default config;
