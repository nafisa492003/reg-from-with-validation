/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#03014C",
        primary: "#11175D",
        secondary: "#5F35F5",
        orange: "#EA6C00",
        bad:'#E3E3EB',
        inp:'#AFAFC7'
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
