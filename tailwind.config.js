/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Sacramento", "cursive"],
        projectTitle: ["Alegreya", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
