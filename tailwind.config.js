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
        '2/3': '66%',
      },
      width: {
        '4/5': '80%',
        '120per':'101vw',
        '240' :'900px'
      },
      height: {
        '4p': '4px',
        '60per':'65vh'
      },
    },
  },
  plugins: [],
}
