import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    surface: "#00001A",
    primary: {
      light: "#FFB619",
      main: "#F5A700",
      dark: "#A87300",
    },
    secondary: {
      main: "#0056F5",
      dark: "#003BA8",
    },
    success: {
      lightest: "#DFF6F0",
      light: "#85DBC5",
      main: "#21AA91",
      dark: "#127874",
      darkest: "#0C5A5D",
    },
    error: {
      lightest: "#FBEAE5",
      light: "#FEAD9A",
      main: "#D33618",
      dark: "#BF0711",
      darkest: "#330101",
    },
    gray: {
      100: "#F8F9FA",
      200: "#F1F3F5",
      300: "#E9ECEE",
      400: "#DEE2E6",
      500: "#CED4DA",
      600: "#ADB5BD",
      700: "#868E96",
      800: "#545C62",
      900: "#343A40",
      1000: "#1E252B",
    },
  },
  fonts: {
    body: "PT Sans, sans-serif",
  },
});
