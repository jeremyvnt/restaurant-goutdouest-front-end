import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 500,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    minHeight: 400,
    objectFit: "cover",
    height: "auto",
    opacity: 0.6,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0,
  },
}));
