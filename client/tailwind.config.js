/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'200px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
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
        slidemd: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1650%)' }
        },
        imageslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-600%)' }
        },
        logoslider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-840%)' }
        },
        categoryslidermd: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1080%)' }
        },
        brandslidermd: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        presslidermd: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-205%)' }
        },
      },
      animation: {
        slidesm: 'slidesm 28s linear infinite',
        slidemd: 'slidemd 13s linear infinite',
        imageslider: 'imageslider 60s infinite',
        logoslider: 'logoslider 40s infinite',
        categoryslidermd:'categoryslidermd 50s infinite',
        brandslidermd:'brandslidermd 16s infinite',
        presslidermd:'presslidermd 30s infinite',
      },
    }
  },
  plugins: [],
}

