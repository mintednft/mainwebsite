import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

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
  },
  palette: {
    primary: {
      main: "#18182B",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#18182B",
    },
    grey: {
      300: "#d9d9d9",
      500: "#8c8c8c",
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
    h5: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
