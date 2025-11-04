/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nastaliq: ["IranNastaliq", "serif"],
        ephesis: ["Ephesis", "cursive"], // fallback to cursive
        vazir: ["Vazirmatn", "serif"],
      },
    },
  },
  plugins: [],
};
