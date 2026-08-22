/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raith: {
          blue: "#005a9c",
          dark: "#0b1329",
          slate: "#1e293b",
          light: "#e5ebf2",
          footer: "#d1dbe5",
          accent: "#00d2ff",
          bronze: "#b37b42"
        }
      }
    },
  },
  plugins: [],
}
