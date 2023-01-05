/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': "#0047BB",
      'background': "#CCDAF1",
      'white': "#E6EDF8",
      'grey': "#99B5E4"
    },
    extend: {},
  },
  plugins: [],
}