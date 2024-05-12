import type { Config } from "tailwindcss";
// import { colors } from "./src/designSystem"; // TO-DO: get import colors instead of defining them in this

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { charcoal: "#1e1e1e" },
      fontFamily: {
        minimalist: ["Minimalist"],
      },
    },
  },
  plugins: [],
};
export default config;
