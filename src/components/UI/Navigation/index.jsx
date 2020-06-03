import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Navigation = ({ isOpen }) => {
  const cls = isOpen
    ? `${classes.navigation} ${classes.active}`
    : classes.navigation;

  return (
    <>
      <nav className={cls}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              Купить
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              Снять
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="/">
              Наши агенты
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
