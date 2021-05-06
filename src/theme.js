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
