import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    surface: "#DADADA",
    primary: {
      light: "#1D4F91",
      main: "#191970",
    },
    yellow: "#EBA417",
    info: {
      lightest: "#F1F7FF",
      light: "#9CC5FF",
      main: "#3484FA",
      dark: "#2352A4",
      darkest: "#1B3B7A",
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
    warning: {
      lightest: "#FCEBDB",
      light: "#FFC58B",
      main: "#F49342",
      dark: "#C05717",
      darkest: "#4A1504",
    },
    alert: {
      lightest: "#FCF1CD",
      light: "#FFEA8A",
      main: "#EEC200",
      dark: "#8A6116",
      darkest: "#573B00",
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
});
