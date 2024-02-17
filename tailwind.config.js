/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },

      fontFamily: {
        balsa: "Balsamiq Sans, sans-serif",

        chewy: "Chewy , system-ui",
      },

      screens: {
        xs: "350px",
        xs_1: "470px",
        xs_2: "520px",
        xxs: "420px",
        sm_2: "650px",
        lg_2: "850px",
      },
      animation: {
        rotate: "caramdice 6s infinite linear",
        flip: "cardflip 3s infinite linear",
        plane: "planemove 5s infinite linear",
        scat: "gudda1 5s infinite linear",
        cycle: "gudda2 5s infinite linear",
        gudda: "tokegudda 12s infinite ",
        fttr: "fttrgudda 12s infinite ",
        resg: "res_headg 5s infinite ",
        fttrsmall: "fttrguddasmall 8s infinite ",
        load: "loader 3s infinite linear",
        headgudda: "herogudda 12s linear infinite ",
        headgudda2: "herogudda2 10s linear infinite ",
      },
      keyframes: {
        herogudda: {
          "0%": { transform: "translateX(0%)rotate(30deg)" },
          "50%": { transform: "translateX(320%)rotateY(40deg)" },
          "100%": { transform: "translateX(0%)rotate(40deg)" },
        },
        herogudda2: {
          "0%": { transform: "translateX(0%)rotate(10deg)" },
          "50%": { transform: "translateX(110%)rotateY(30deg)" },
          "100%": { transform: "translateX(0%)rotate(10deg)" },
        },
        caramdice: {
          "0%": { transform: "rotate(360deg)" },
        },
        tokegudda: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(800%)" },
          "100%": { transform: "translateX(0%)" },
        },
        loader: {
          "0%": { transform: "translateX(-40%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-150%)" },
          // "100%": { transform: "translateX(0%)" },
        },

        fttrgudda: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-750%)" },
        },
        res_headg: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-350%)" },
        },
        fttrguddasmall: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-350%)" },
        },
        cardflip: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0%)" },
        },
        planemove: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-9%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gudda1: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-9%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gudda2: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(9%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
