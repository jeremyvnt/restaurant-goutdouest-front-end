import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Divider } from "@material-ui/core";

import { Footer, Navbar, Sidebar } from "./components";
import { pages, sections } from "./constants";
import useStyles from "./styles";

const Main = ({ children }) => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Navbar openDrawerHandler={openDrawer} pages={pages} />
      <Sidebar isOpen={isDrawerOpen} onClose={closeDrawer} pages={pages} />
      <main>
        <Divider />
        {children}
      </main>
      <Footer sections={sections} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
