import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
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
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
