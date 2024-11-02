/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Orbitron", 'sans-serif'],
        'primary-bold':["Orbitron-bold", 'sans-serif'],
        'secondary':["Exo2", 'sans-serif'],
      },
      backgroundColor:{
        'DarkBlue':'#0D1B2A',
        'NeonBlue':'#1B98F5',
        'Silver':'#B0BEC5',
        'White':'#FFFFFF',
        'Black':'#000000',
        'ElectricGreen':'#32FF6A',
      },
      colors:{
        'DarkBlue':'#0D1B2A',
        'NeonBlue':'#1B98F5',
        'Silver':'#B0BEC5',
        'White':'#FFFFFF',
        'Black':'#000000',
        'ElectricGreen':'#32FF6A',
      }
    },
  },
  plugins: [],
}

