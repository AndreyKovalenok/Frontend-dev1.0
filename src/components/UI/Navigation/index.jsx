import React from "react";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className={classes.navigation}>
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

export default Navigation;
