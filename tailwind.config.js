module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#264553",
        "persian-green": "#2A9D8F",
        "orange-yellow-crayola": "#E9C46A",
        "sandy-brown": "#F4A261",
        "burnt-sienna": "#E76F51",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Righteous", "cursive"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};
