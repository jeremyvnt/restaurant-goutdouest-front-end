import React, { useState } from "react";

import HeaderDrawer from "../HeaderDrawer";
import Navbar from "../Navbar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div>
      <Navbar openDrawerHandler={openDrawer} />
      <HeaderDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default Header;
