import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-custom-gradient":
          "linear-gradient(45deg, rgba(49, 45, 80, 1) 0%, rgba(27, 120, 55, 0.8) 50%, rgba(246, 219, 16, 0.75) 100%)",
        "dark-custom-gradient":
          "linear-gradient(45deg, rgba(6, 4, 10,1) 21%, rgba(45, 26, 108, 0.8) 80%, rgba(78, 28, 124, 0.75) 100%)",
      },
      backgroundColor: {
        "light-article-background": "rgb(241, 245, 249)",
        "dark-article-background": "rgb(14, 12, 18)",
        "light-about-background": "rgb(255, 255, 255)",
        "dark-about-background": "rgb(6, 4, 10)",
        "light-blog-background": "rgb(255, 255, 255)",
        "dark-blog-background": "rgb(6, 4, 10)",
        "light-portfolio-background": "rgb(203, 213, 225)",
        "dark-portfolio-background": "rgb(14, 12, 18)",
      },
      fill: {
        "light-article-background": "rgb(241, 245, 249)",
        "dark-article-background": "rgb(14, 12, 18)",
        "light-about-background": "rgb(255, 255, 255)",
        "dark-about-background": "rgb(6, 4, 10)",
        "light-blog-background": "rgb(255, 255, 255)",
        "dark-blog-background": "rgb(6, 4, 10)",
        "light-portfolio-background": "rgb(203, 213, 225)",
        "dark-portfolio-background": "rgb(14, 12, 18)",

        "light-icons": "#555",
        "dark-icons": "#FFF",
      },
      textColor: {
        "testimonial-highlight": "rgba(246, 219, 16, 1)",
        "about-highlight": " rgba(27, 120, 55, 1)",
        "light-default": "#000",
        "dark-default": "#DDD",
      },
    },
  },
  plugins: [],
};
export default config;
