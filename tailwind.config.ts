import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        220: "220px",
        250: "250px",
        300: "300px",
        330: "330px",
        400: "400px",
        800: "800px",
        150: "150px",
        90: "90vw",
        1024: "1024px",
        70: "70%",
        10: "10px",
      },
      height: {
        150: "150px",
        45: "45px",
        10: "10%",
        50: "50%",
        60: "60vh",
        75: "75vh",
        90: "90%",
        85: "85vh",
      },
    },
    colors: {
      primary: "#5954D2",
      blue: "#3478D7",
      deepBlue: "#0A2F5B",
      backgroundBlue: "#D5E3F7",
      background: "#F5F5F5",
      disabled: "#BFBFBF",
      inputDisabled: "#BABABA",
      white: "#FFFFFF",
      black: "#000000",
      red: "#D73451",
    },
    screens: {
      xs: "220px",
      sm: "350px",
      md: "1200px",
      lg: "1201px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    borderWidth: {
      "1": "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "20px",
      full: "9999px",
      large: "40px",
    },
  },
  plugins: [],
};
export default config;
