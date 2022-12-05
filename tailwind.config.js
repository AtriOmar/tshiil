/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: "DM sans, sans-serif",
        teko: "Teko, sans-serif",
        cera: "cera round pro",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(.85)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
    screens: {
      scr600: "600px",
      scr700: "700px",
      scr800: "800px",
      scr900: "900px",
      scr1000: "1000px",
      scr1100: "1100px",
      scr1250: "1250px",
    },
  },
  plugins: [],
};
