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
    },
  },
  plugins: [],
}
