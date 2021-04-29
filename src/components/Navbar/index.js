import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

import { links } from "../Header/constants";
import useStyles from "./styles";

const Navbar = ({ openDrawerHandler }) => {
  const classes = useStyles();

  const renderLink = ({ label, href }) => (
    <NextLink key={`link-${label}`} href={href}>
      <Button color={"secondary"} component={"a"}>
        {label}
      </Button>
    </NextLink>
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
          <Hidden xsDown>{renderLinks()}</Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
