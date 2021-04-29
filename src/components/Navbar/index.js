import {
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  AppBar,
} from "@material-ui/core";
import NextLink from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

import { links } from "../Header/constants";
import useStyles from "./styles";

const Navbar = ({ openDrawerHandler }) => {
  const classes = useStyles();

  const renderLink = ({ label, href }) => (
    <NextLink href={href}>{label}</NextLink>
  );

  const renderLinks = () => links.map(renderLink);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap>
            Goût d'ouest
          </Typography>
          <div className={classes.grow} />
          <Hidden xsDown>
            <Typography>{renderLinks()}</Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
