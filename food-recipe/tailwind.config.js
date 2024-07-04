/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}',
  ]
  theme: {
    extend: {
      colors: {
      "weateher-primary": "#00668A",
      "weather-secondary": "#004E71",
      },
    },
    fontfamily:{
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens:{
      sm:"640px",
      md:"768px",
    },
  },
  plugins: [],
};

