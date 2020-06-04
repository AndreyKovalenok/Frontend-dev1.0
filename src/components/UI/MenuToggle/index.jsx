import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const MenuToggle = ({ isOpen, onToggle }) => {
  const cls = isOpen
    ? `${classes["toggle-lines"]} ${classes.active}`
    : classes["toggle-lines"];

  return (
    <button onClick={onToggle} className={classes.toggle} type="button">
      <span className={cls} />
    </button>
  );
};

MenuToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MenuToggle;
