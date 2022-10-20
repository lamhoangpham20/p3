import { Theme } from "theme-ui";

const myTheme: Theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Exo",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  buttons: {
    primary: {
      fontFamily: "Exo",
      color: "white",
      textTransform: "uppercase",
      bg: "red",
      transition: "background 100ms ease-in-out",
      "&:hover": {
        color: "black",
      },
    },
  },
  colors: {
    text: "#fff",
    background: "#282c34",
    primary: "#ea002a",
    secondary: "#282c34",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  cards: {
    primary: {
      borderRadius: 8,
      backgroundColor: "#00041f",
    },
  },
  forms: {
    input: {
      fontFamily: "Exo",
      borderRadius: 0,
      backgroundColor: "secondary",
      border: "transparent",
      color: "white",
      outlineColor: "secondary",
    },
  },
};

export default myTheme;
