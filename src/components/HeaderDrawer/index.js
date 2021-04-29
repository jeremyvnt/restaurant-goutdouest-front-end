import { List, ListItem, ListItemText } from "@material-ui/core";
import { bool, func } from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import NextLink from "next/link";
import React from "react";

import { links } from "../Header/constants";
import useStyles from "./styles";

const HeaderDrawer = ({ isOpen, onClose }) => {
  const classes = useStyles();

  const renderDrawerChoice = ({ label, href }) => (
    <ListItem button key={`drawer-choice-${label}`}>
      <NextLink href={href}>
        <ListItemText primary={label} />
      </NextLink>
    </ListItem>
  );

  const renderDrawerChoices = () => links.map(renderDrawerChoice);

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

HeaderDrawer.propTypes = {
  isOpen: bool,
  onClose: func,
};

export default HeaderDrawer;
