/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D75127',
        'dark': '#2A2B2B',
        'grey': '#8E9191',
        'deepGrey': '#8F8F90',
        'orange': '#EB722F',
        'fadeWhite': '#CBCACF',
        'darkGrey': '#323434'
      },
      fontFamily: {
        'DM-Sans': ["DM Sans", "serif"],
        'Lora': ["Lora", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "",
    logs: true, 
    themeRoot: ":root",
},
}