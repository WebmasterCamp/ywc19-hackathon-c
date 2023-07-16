/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        "custom-cream": "#F5E4CC",
        "custom-dark-orange": "#B33D26",
        "custom-green": "#035B23",
        "custom-red": "#700015",
        "custom-orange": "#F36A0E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
