import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const FavoritesButton = ({ children, reverse, className }) => {
  const cls = [classes.button];

  if (reverse) {
    cls.push(classes.button_reverse);
  }

  if (className) {
    cls.push(className);
  }

  return (
    <button className={cls.join(" ")} type="button">
      {children}
    </button>
  );
};

FavoritesButton.defaultProps = {
  reverse: false,
  className: "",
};

FavoritesButton.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
};

export default FavoritesButton;
