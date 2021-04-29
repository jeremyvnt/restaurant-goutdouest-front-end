import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: {
    main: "#5F666F",
  },
  secondary: {
    main: "#fff",
  },
};

const theme = createMuiTheme({
  palette,
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
