import React from "react";

import classes from "./Logo.module.scss";

import logo from "./compass-logo.svg";

const Logo = () => (
  <img
    className={classes.Logo}
    src={logo}
    alt="Компания compass"
    width="178"
    height="24"
  />
);

export default Logo;
