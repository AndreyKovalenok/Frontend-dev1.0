import React from "react";

import Navigation from "../UI/Navigation";

import Logo from "../Logo";
import BigLogo from "./compass-development-logo.svg";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="wrapper">
        <div className={classes.HeaderTopPanel}>
          <Logo />
          <Navigation />
        </div>
      </div>
      <div className={classes.HeaderFill}>
        <img
          className={classes.HeaderFill__img}
          src={BigLogo}
          alt="Компания Compass Development"
          width="419"
          height="131"
        />
      </div>
    </header>
  );
};

export default Header;
