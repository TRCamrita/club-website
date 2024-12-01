/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
    },
    keyframes: {
      scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' },
      },
  },
      fontFamily: {
        'primary':['Roboto Mono','monospace'],
        'headers':['Rubik','sans-serif']
      },
      backgroundColor:{
        'Silver':'#B0BEC5',
        'White':'#FFFFFF',
        'Black':'#1e1e1e',
        'Charcoal':"#36454F"
      },
      textColor:{
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

