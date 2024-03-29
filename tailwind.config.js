module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'"],
      },
      keyframes: {
        appear: {
          "from": { transform: "translateY(-100%)" },
          "to": { transform: "translateY(0%)" },
        },
        opacityChangeY:{
          "from": { opacity: 0, transform: "translateY(-100%)"  },
          "to": { opacity: 100, transform: "translateY(0%)"},
        },
        opacityChangeX:{
          "from": { opacity: 0, transform: "translateX(-50%)"  },
          "to": { opacity: 100, transform: "translateX(0%)"},
        },

      },
      animation: {
        'appear': 'appear linear 600ms',
         "opacityChangeY": "opacityChangeY linear 800ms",
         "opacityChangeX": "opacityChangeX linear 800ms",
      },
      screens: {
        'mobile': '400px',
        'notebook': '1024px',
        'desktop': '1240px',
        'bigdesktop': '1366px',
        'full': '1920px',
      },
    },
  },
  plugins: [],
};
