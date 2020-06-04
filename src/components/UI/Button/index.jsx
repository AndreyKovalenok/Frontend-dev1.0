import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Button = ({ children }) => (
  <button className={classes.button} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
