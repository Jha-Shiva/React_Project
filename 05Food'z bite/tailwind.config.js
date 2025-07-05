// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ this includes all your React files
  ],
  darkMode: 'class', // ✅ tells Tailwind to use dark mode based on the "dark" class
  theme: {
    extend: {},
  },
  plugins: [],
}
