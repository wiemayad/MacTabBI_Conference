/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
      },
      colors:{
        'orange':"#FD9516",
        'rouge':'#D90C09'
      },
      backgroundImage:{
        'conference': 'url(src/img/mactabbi/conference3.png)'
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}

