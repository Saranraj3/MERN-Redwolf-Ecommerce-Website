/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: '#ec1a30;',
        bordergray:'#dedede',
        backgroundgray:'#ececec;'
      }
    }

  },
  plugins: [],
}

