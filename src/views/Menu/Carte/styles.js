import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: theme.palette.primary.main,
  },
  dish: {
    border: 0,
    cursor: "none",
  },
  paddingTop: {
    paddingTop: theme.spacing(3),
  },
  tabpanel: {
    height: 430,
    overflow: "auto",
  },
}));
