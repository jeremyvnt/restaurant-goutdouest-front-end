import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}));
