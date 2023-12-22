/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1f1f1f', // Add your custom dark theme color
        customLight: '#ffffff', // Add your custom light theme color
      },
    },
  },
  plugins: [],
}