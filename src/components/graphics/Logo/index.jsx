import React from "react";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

import logo from "./compass-logo.svg";

const Logo = () => (
  <Link className={classes.link} to="/Frontend-dev1.0">
    <img className={classes.logo} src={logo} alt="Компания compass" />
  </Link>
);

export default Logo;
