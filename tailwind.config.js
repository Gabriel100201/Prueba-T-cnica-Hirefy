/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #0D5287 -14.11%, #187DCA 13.97%, #05AACE 40.69%, #04D2C6 68.1%, #26E4C7 90.02%, #D3FFF5 117.42%)'
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#2DCAB1',
        secondary: '#7D879C',
        alternative: '#2B3445',
        chipFeatBg: '#D3FFF5',
        chipFeatText: '#1CB59C',
        chipFixBg: '#FFF8E5',
        chipFixText: "#FFB800"
      },
    },
  },
  plugins: [],
}