module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Metal Mania"],
      },
      backgroundImage: {
        pc: 'url("../Icons Background/background1.jpg")',
      },
      colors: {
        menu: "#101F41",
        facebook: "#3B5998",
        sign: "#A9A7FF",
        checkout: "#6EE36C",
      },
      width: {
        110: "25rem",
        112: "26rem",
        114: "27rem",
        116: "28rem",
        118: "30rem",
      },
    },
  },
  plugins: [],
};
