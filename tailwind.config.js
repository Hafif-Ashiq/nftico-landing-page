/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        "background-color" : "#09090A",
        "bg-nav":  "#04011C",
        "secondary": "#1E1B33",
        "primary-text": "#7040F2",
        
      },
      fontFamily:{
        outfit:  ['Outfit', "sans-serif"],

      },
      backgroundImage:{
        "main-gradient" : "linear-gradient(88deg, #0500FA 11.52%, #E01E5A 100%)"
      },
      boxShadow: {
        "nav-shadow" : "0px 20px 40px 0px rgba(205, 28, 104, 0.08)"
      }
    },
  },
  plugins: [],
}

