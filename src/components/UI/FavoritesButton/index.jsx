import React from "react";
import PropTypes from "prop-types";
import cn from "classnames/bind";

import classes from "./styles.module.scss";

const cx = cn.bind(classes);

const FavoritesButton = ({ children, reverse, className, onClick }) => {
  const cls = cx({
    button: true,
    button_reverse: reverse,
  });

  return (
    <button onClick={onClick} className={`${cls} ${className}`} type="button">
      {children}
    </button>
  );
};

FavoritesButton.defaultProps = {
  reverse: false,
  className: "",
  onClick: null,
};

FavoritesButton.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default FavoritesButton;
