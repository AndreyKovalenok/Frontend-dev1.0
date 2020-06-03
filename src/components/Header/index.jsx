import React from "react";

import Navigation from "../UI/Navigation";

import Logo from "../Logo";
import BigLogo from "./compass-development-logo.svg";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="wrapper">
        <div className={classes["top-panel"]}>
          <Logo />
          <Navigation />
        </div>
      </div>
      <div className={classes["header-fill"]}>
        <img
          className={classes.image}
          src={BigLogo}
          alt="Компания Compass Development"
        />
      </div>
    </header>
  );
};

export default Header;
