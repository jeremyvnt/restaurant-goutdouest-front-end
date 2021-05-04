import { createMuiTheme } from "@material-ui/core/styles";
import { palette } from "./palette";

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: "Lato",
    button: {
      textTransform: "none",
    },
  },
  layout: {
    contentWidth: 1236,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
