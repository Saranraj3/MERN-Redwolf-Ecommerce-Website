/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: '#ec1a30;',
        bordergray: '#dedede',
        backgroundgray: '#ececec;'
      },
      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        imageslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-600%)' }

        }
      },
      animation: {
        slide: 'slide 30s linear infinite',
        imageslider: 'imageslider 30s infinite'
      }
    }

  },
  plugins: [],
}

