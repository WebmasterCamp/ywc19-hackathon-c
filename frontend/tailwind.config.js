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
        "ibm-plex-sans-thai": ["IBM Plex Sans Thai", "sans-serif"],
      },
      colors: {
        "custom-cream": "#F5E4CC",
        "custom-dark-orange": "#B33D26",
        "custom-green": "#035B23",
        "custom-red": "#700015",
        "custom-orange": "#F36A0E",
        "custom-light-gray": "#F2F2F2",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 23px 0px rgba(0, 0, 0, 0.25)",
        "custom-search": "0px 1px 12px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
