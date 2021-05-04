import React from "react";
import { array, string } from "prop-types";
import clsx from "clsx";
import { IconButton, Grid, List, ListItem } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import { Image } from "../../../../components/atoms";
import MenuGroup from "./MenuGroup";
import useStyles from "./styles";

const Footer = (props) => {
  const { sections, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="Restaurant Goût d'Ouest">
                    <Image
                      className={classes.logoImage}
                      src="logo-grey-bg-square.svg"
                      alt="Logo Goût d'Ouest"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <div className={classes.menu}>
                  <div>
                    <MenuGroup section={sections[0]} />
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.menu}>
                  <div>
                    <MenuGroup section={sections[1]} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: string,
  sections: array.isRequired,
};

export default Footer;
