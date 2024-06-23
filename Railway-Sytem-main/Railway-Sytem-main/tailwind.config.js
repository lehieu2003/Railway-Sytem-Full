/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0082c4",
        customGreen: "#a6b727",
        customBorder: "#385d8a",
        customOrange: "#dd5227",
        customText: "#646464",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
