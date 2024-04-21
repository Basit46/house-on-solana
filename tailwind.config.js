/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pry: ["Mona-Sans", "sans-serif"],
        Sec: ["Raleway", "sans-serif"],
      },
      screens: {
        vsm: "450px",
        xmd: "850px",
      },
    },
  },
  plugins: [],
};
