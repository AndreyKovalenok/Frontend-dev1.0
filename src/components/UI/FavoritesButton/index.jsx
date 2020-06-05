import React from "react";
import PropTypes from "prop-types";
import cn from "classnames/bind";

import classes from "./styles.module.scss";

const cx = cn.bind(classes);

const FavoritesButton = ({ children, reverse, className }) => {
  const cls = cx({
    button: true,
    button_reverse: reverse,
  });

  return (
    <button className={`${cls} ${className}`} type="button">
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
