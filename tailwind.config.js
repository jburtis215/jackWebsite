module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#a3d7a4',
        'light-gray': '#d3d3d3',
      },
      margin: {
        '1/10': '10%',
      },
      maxWidth: {
        '2/3': '88%',
        '1000': '1000px',
      },
      width: {
        '4/5': '80%',
        '120per':'101vw',
        '900' :'900px',
        '600' :'600px',
        '880' :'880px'
      },
      height: {
        '4p': '4px',
        '60per':'65vh'
      },
    },
  },
  plugins: [],
}
