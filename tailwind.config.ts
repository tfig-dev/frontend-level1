import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //para adicionarmos cores
      colors: {
        text: "#373737",
        subtext: "#797979",
        sidebar: {
          category: "#E4E4E4",
          subcategory: "#a8a7a7",
          hover: "#58607c",
          hoversub: "#FFFFFF",
          selected: "#58607c",
          background: "#363D59",
          iconcolor: "#E4E4E4",
          textselected: "#FF0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
