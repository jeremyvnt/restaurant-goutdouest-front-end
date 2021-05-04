import { AppBar, Button, Hidden, IconButton, Toolbar } from "@material-ui/core";
import NextLink from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

import { FullGreyBackgroundLogo } from "../../../../components/Logo";
import useStyles from "./styles";

const Navbar = ({ pages, openDrawerHandler }) => {
  const classes = useStyles();

  const renderLink = ({ title, href }) => (
    <NextLink key={`link-${title}`} href={href}>
      <Button size={"large"} color={"secondary"} component={"a"}>
        {title}
      </Button>
    </NextLink>
  );

  const renderLinks = () => pages.map(renderLink);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
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
          <Hidden xsDown>{renderLinks()}</Hidden>
          <div className={classes.logo}>
            <FullGreyBackgroundLogo width={200} height={75} />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
