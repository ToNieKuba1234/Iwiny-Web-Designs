module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'fire-sans-condensed': ['Fire Sans Condesned', 'sans-serif'],
          'kanit': ['Kanit', 'sans-serif'],
          'noto-serif': ['Noto Serif', 'serif'],
          'bebas-neue': ['Bebas Neue', 'sans-serif'],
          'selection': ['Selection', 'sans-serif']
        },

        backgroundImage: {
          'landing-hero-1': "url('./src/assets/landing_bg.png')"
        },
      },
    },
    plugins: [],  
};