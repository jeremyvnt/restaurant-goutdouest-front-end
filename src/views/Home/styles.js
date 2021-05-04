import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    "& .section-header__cta-container": {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        "& .section-header__cta-item-wrapper": {
          width: "100%",
          "&:last-child": {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          "& .MuiButtonBase-root": {
            width: "100%",
          },
        },
      },
    },
  },
  heroShaped: {
    "& .hero-shaped__image": {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down("sm")]: {
      "& .hero-shaped__image": {
        position: "relative",
      },
      "& .hero-shaped__wrapper": {
        flexDirection: "column",
      },
    },
  },
  imageAnimation: {
    background: `url("restaurant.jpeg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px auto",
    width: "600%",
    height: "600%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "800px auto",
    },
  },
  fontWeightBold: {
    fontWeight: "900",
  },
  sectionImageContainer: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));
