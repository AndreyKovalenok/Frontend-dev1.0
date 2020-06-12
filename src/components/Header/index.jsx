import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../UI/Navigation";
import Logo from "../graphics/Logo";
import MenuToggle from "../UI/MenuToggle";

import BigLogo from "./compass-development-logo.svg";

import classes from "./styles.module.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.border}>
        <div className="wrapper">
          <div className={classes.topPanel}>
            <Logo />
            <Navigation isOpen={isMenuOpen} />
            <MenuToggle onToggle={toggleMenuHandler} isOpen={isMenuOpen} />
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <div className={classes.headerFill}>
            <img
              className={classes.image}
              src={BigLogo}
              alt="Компания Compass Development"
            />
          </div>
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
