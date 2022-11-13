const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
      colors: {
        "uz-blue": "#0269c9",
        "uz-grey": "#3c3c3b",
      },
    },
  },
  plugins: [],
};
