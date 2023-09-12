/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        almarai: ["Almarai", "sans"],
        inter: ["Inter", "sans-serif"],
        nunito:["'Nunito Sans',' sans-serif'"],
        poppins:["Poppins", "sans-serif"],
        mulish:["Mulish", "sans-serif"]
      },
    },
  },
  plugins: [],
};
