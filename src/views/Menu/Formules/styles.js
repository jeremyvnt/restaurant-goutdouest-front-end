import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formuleCard: {
    cursor: "pointer",
  },
  menuBackground: {
    background: `url(ardoise_bg.png)`,
    padding: "4rem",
  },
  formules: {
    paddingBottom: "2rem",
    overflow: "auto",
    whiteSpace: "nowrap",
  },
  textBold: {
    fontWeight: 600,
  },
  tarifOption: {
    width: "auto",
    flex: "0 0 auto",
  },
  menuSection: (nbMenuSections) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: `calc(100% / ${nbMenuSections})`,
      flexBasis: `calc(100% / ${nbMenuSections})`,
    },
  }),
}));
