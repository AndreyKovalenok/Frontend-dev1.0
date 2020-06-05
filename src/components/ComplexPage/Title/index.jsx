import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Title = ({ children, className }) => {
  const cls = className ? `${classes.title} ${className}` : classes.title;

  return <h2 className={cls}>{children}</h2>;
};

Title.defaultProps = {
  className: "",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
