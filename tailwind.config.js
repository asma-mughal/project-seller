/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      },
      colors: {
        'primary-black': '#FFFFFF',
        'secondary-white': '#1A232E',
        'primary-purple' : ' #c679e3',
        'primary-green' : '#44ce6f',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}