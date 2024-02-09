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
        fttr: "fttrgudda 8s infinite ",
        resg: "res_headg 5s infinite ",
        fttrsmall: "fttrguddasmall 8s infinite ",
        load: "loader 2s infinite linear",
        headgudda: "herogudda 6s linear infinite ",
      },
      keyframes: {
        herogudda: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(0%)" },
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
          "0%": { transform: "translateX(0%)" },
          "20%": { transform: "translateX(400%)" },
          "40%": { transform: "translateY(-200%)" },
          "50%": { transform: "translateX(0%)" },
          "80%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateX(0%)" },
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
