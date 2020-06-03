import React from "react";

import classes from "./Logo.module.scss";

import logo from "./compass-logo.svg";

const Logo = () => (
  <img className={classes.logo} src={logo} alt="Компания compass" />
);

export default Logo;
