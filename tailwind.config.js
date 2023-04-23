/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      header: ['Ubuntu'],
      icon: ['Roboto']
    },
    colors:{
      'dark-gray' : '#1b1f24',
      'medium-gray': '#21282f',
      'light-gray' : '#232b35',
      'blue' : '#075fe4',
      'white' : '#ffffff',
      'orange' : '#F06F02',
      'black' : '#000',
      'html' : '#e54c21',
      'css' : '#214ce5',
      'js' : '#f0db4f',
      'jsx' : '#61dbfb',
      'tailwind' : '#01b7d6',
      'studio' : '#0085ca'
    }
  },
  plugins: [],
}

