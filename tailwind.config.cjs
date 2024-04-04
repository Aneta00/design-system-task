/* eslint-env node */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Interphases Pro", "sans-serif"],
      },
      colors: {
        content: {
          primary: "var(--color-content-primary)",
          secondary: "var(--color-content-secondary)",
        },
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        none: "0",
      },
      fontSize: {
        12: ["0.75rem", { lineHeight: "130%" }],
        14: ["0.875rem", { lineHeight: "130%" }],
        17: ["1.0625rem", { lineHeight: "130%" }],
        20: ["1.25rem", { lineHeight: "150%" }],
        50: ["3.125rem", { lineHeight: "110%" }],
      },
      // added numbers on the left to represent pixels for better developer experience and not having to think and calculate. Alternatively, could reset it to 1rem = 10px etc.
      spacing: {
        px: "1px",
        0: "0px",
        2: "0.125rem",
        4: "0.25rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        44: "2.75rem",
        48: "3rem",
        56: "3.5rem",
        64: "4rem",
        17: "1.0625rem",
        80: "5rem",
        96: "6rem",
        112: "7rem",
        128: "8rem",
        144: "9rem",
        160: "10rem",
        176: "11rem",
        192: "12rem",
        200: "12.5rem",
        208: "13rem",
        224: "14rem",
        240: "15rem",
        256: "16rem",
        288: "18rem",
        320: "20rem",
        384: "24rem",
        1200: "75rem",
      },
    },
    borderRadius: {
      custom: "var(--rounding-500, 10px)",
      full: "9999px",
    },
    borderWidth: {
      default: "var(--misc-border-size-default, 1px)",
    },
    borderColor: {
      custom: "var(--misc-border, rgba(2, 8, 48, 0.15))",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexBasis: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    plugins: [
      require("@tailwindcss/container-queries"),
      plugin(function ({ addBase, addComponents }) {
        addBase({
          ":root": {
            "--color-accent": "blue",
            "--color-content-primary": "#000000",
            "--color-content-secondary": "#707177",
          },
          ".dark": {
            "--color-accent": "red",
            "--color-content-primary": "#FFFFFF",
          },
        });
        addComponents({
          ".heading-900": {
            "@apply text-[42px]": {},
            "@apply font-[700]": {},
            "@apply leading-[110%]": {},
            "@apply -tracking-[0.42px]": {},
          },
        });
      }),
    ],
  },
};
