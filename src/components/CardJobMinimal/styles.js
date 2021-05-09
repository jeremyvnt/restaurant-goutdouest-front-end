import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `solid 1px rgba(43, 41, 45, 0.2)`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    background: "transparent",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
    "&:hover": {
      background: theme.palette.primary.main,
      boxShadow:
        "0 11px 55px 10px rgba(0, 0, 0, 0.07), 0 13px 18px -8px rgba(0, 0, 0, 0.15)",
      "& .card-job-minimal__title, & .card-job-minimal__location, & .card-job-minimal__arrow": {
        color: "white !important",
      },
    },
  },
  cardJobMinimalBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginRight: theme.spacing(8),
    },
  },
  title: {
    fontWeight: "bold",
  },
}));
