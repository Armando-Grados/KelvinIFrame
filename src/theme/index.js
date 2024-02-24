import { createTheme } from "@mui/material";

const themeOptions = [
  {
    name: "light",
    option: {
      typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      palette: {
        mode: "light",
        primary: {
          main: "#5fbb4c",
          // light: "#FFD3E0",
        },
      },
    },
  },
  {
    name: "dark",
    option: {
      palette: {
        mode: "dark",
      },
    },
  },
];

export const createMuiTheme = (themeMode) => {
  let options = themeOptions.find((item) => item.name === themeMode);

  if (!options) {
    console.warn("theme not found!");
    [options] = themeOptions;
  }

  return createTheme(options.option);
};
