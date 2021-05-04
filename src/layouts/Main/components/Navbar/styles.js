import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  appBar: {
    boxShadow: "none",
  },
}));
