import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Button = ({ children, className }) => {
  const cls = className ? `${classes.button} ${className}` : classes.button;

  return (
    <button className={cls} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
