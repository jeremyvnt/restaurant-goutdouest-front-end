import { List, ListItem, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

const MenuGroup = ({ section }) => {
  const classes = useStyles();

  return (
    <List disablePadding className={classes.menuItem}>
      <ListItem disableGutters className={classes.menuGroupItem}>
        <Typography variant="body2" className={classes.menuGroupTitle}>
          {section.title}
        </Typography>
      </ListItem>
      {section?.items.map(({ href = null, title }, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            component={"a"}
            href={href}
            className={clsx(classes.navLink, "submenu-item")}
          >
            {title}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuGroup;
