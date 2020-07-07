import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#1a535c",
    },
    common: {
      white: "#f7fff7",
    },
    secondary: {
      main: "#ff6b6b",
    },
  },
  spacing: 10,
});

export default theme;
