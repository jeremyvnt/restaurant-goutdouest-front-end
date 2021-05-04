import { lighten } from "@material-ui/core/styles/colorManipulator";

export const grey = "#5F666F";

export const primary = {
  main: grey,
};

export const secondary = {
  main: "#fff",
};

export const text = {
  primary: "#2d3748",
  secondary: "#718096",
};

export const divider = "rgba(0, 0, 0, 0.12)";

export const background = {
  paper: "#fff",
  default: "#fff",
  level2: "#f5f5f5",
  level1: "#fff",
  footer: grey,
};

export const alternate = {
  main: lighten(primary.main, 0.8),
  dark: "#e8eaf6",
};

export const palette = {
  primary,
  secondary,
  alternate,
  text,
  divider,
  background,
};

export default palette;
