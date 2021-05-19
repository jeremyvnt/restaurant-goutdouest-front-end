import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(7, 0),
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  imagesContainer: {
    flexDirection: "column",
  },
  socialMedias: {
    justifyContent: "center",
  },
  logoContainerItem: {
    paddingTop: 0,
    justifyContent: "center",
  },
  logoContainer: {
    width: 120,
    height: "auto",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  divider: {
    width: "100%",
  },
  menu: {
    display: "flex",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}));
