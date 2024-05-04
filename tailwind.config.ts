import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        hyperlink: "#6262ff",
        light: {
          accent: {
            100: "#dd0025",
            200: "#ffbfab",
          },
          background: {
            100: "#fbfbfb",
            200: "#f1f1f1",
            300: "#c8c8c8",
          },
          primary: {
            100: "#019b98",
            200: "#55ccc9",
            300: "#c1ffff",
          },
          text: {
            100: "#014e60",
            200: "#3f7a8d",
          },
        },
        dark: {
          accent: {
            100: "#ff3d3d",
            200: "#ffe0c8",
          },
          background: {
            100: "#0d1f2d",
            200: "#1d2e3d",
            300: "#354656",
          },
          primary: {
            100: "#0d6e6e",
            200: "#4a9d9c",
            300: "#afffff",
          },
          text: {
            100: "#ffffff",
            200: "#e0e0e0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
export default config;
