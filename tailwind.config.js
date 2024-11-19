/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2B52",
        secondary: "#6BC049",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Artifika", "serif"],
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
    },
  },
  plugins: [],
};
