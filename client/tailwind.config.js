/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'200px',
      md:'500px',
      lg:'1020px',
      xl:'1200px',
    },
    extend: {
      colors: {
        Red: '#d4161e;',
        bordergray: '#dedede',
        backgroundgray: '#ececec;',
        LightBlack: '#191919;',
        footercolor: '#787878;',
      },
      keyframes: {
        slidesm: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-2000%)' }
        },
        imageslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-600%)' }
        },
        logoslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-840%)' }
        },
        sectionslidersm: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        categoryslidersm: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1200%)' }
        },
        brandslidersm: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-220%)' }
        },
        presslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-450%)' }
        },
      },
      animation: {
        slidesm: 'slidesm 28s linear infinite',
        imageslider: 'imageslider 60s infinite',
        logoslider: 'logoslider 40s infinite',
        sectionslidersm:'sectionslidersm 30s infinite',
        categoryslidersm:'categoryslidersm 50s infinite',
        brandslidersm:'brandslidersm 16s infinite',
        presslider:'presslider 30s infinite',
      },
    }
  },
  plugins: [],
}

