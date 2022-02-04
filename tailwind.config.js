module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#252324",
        text: "#EDEDED",
        yellow: "#FFEF3D",
        button: "#ff4243",
      },
      boxShadow: {
        vignette: "0 0 150px rgba(0,0,0,0.9) inset",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
