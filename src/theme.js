import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const PRIMARY = "#18182B";
const SECONDARY = "#5B33F4";

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          minHeight: "100vh",
        },
        a: {
          textDecoration: "none",
          color: "#000",
        },
      },
    },
    MuiDivider: {
      light: {
        backgroundColor: SECONDARY,
        height: 2,
      },
    },
  },
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    success: {
      main: "#04C904",
    },
    error: {
      main: "#EB5757",
    },
    warning: {
      main: "#F2C94C",
    },
    info: {
      main: "#3250FE",
    },
    background: {
      default: "#FEFEFE",
      //paper: "#F0F0F0",
    },
    text: {
      primary: "#18182B",
      secondary: "#595959",
    },
    grey: {
      300: "#d9d9d9",
      400: "#BFBFBF",
      500: "#8c8c8c",
      700: "#595959",
      900: "#262626",
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: 52,
      fontWeight: 700,
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
    },
    h4: {
      fontWeight: 500,
      fontSize: 24,
    },
    h5: {
      fontWeight: 500,
      fontSize: 18,
    },
    h6: {
      fontWeight: 500,
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
