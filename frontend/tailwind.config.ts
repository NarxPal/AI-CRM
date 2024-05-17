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

        dashbboard:{
          "dark_blue" : "#001216",
          "light_black": "#242529",
          "hover_gray": "#37373F",

        }
      },
    },
  },
  plugins: [],
};
export default config;
