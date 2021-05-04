import { List, ListItem, ListItemText } from "@material-ui/core";
import { bool, func } from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import NextLink from "next/link";
import React from "react";

import useStyles from "./styles";

const Sidebar = ({ isOpen, onClose, pages }) => {
  const classes = useStyles();

  const renderDrawerChoice = ({ title, href }) => (
    <ListItem button key={`drawer-choice-${title}`}>
      <NextLink href={href}>
        <ListItemText primary={title} />
      </NextLink>
    </ListItem>
  );

  const renderDrawerChoices = () => pages.map(renderDrawerChoice);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div
        className={classes.list}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>{renderDrawerChoices()}</List>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isOpen: bool,
  onClose: func,
};

export default Sidebar;
