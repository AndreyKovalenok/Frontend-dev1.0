import React from "react";

import classes from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={classes.Navigation}>
    <ul className={classes.Navigation__list}>
      <li className={classes.Navigation__item}>
        <a className={classes.Navigation__link} href="/">
          Купить
        </a>
      </li>
      <li className={classes.Navigation__item}>
        <a className={classes.Navigation__link} href="/">
          Снять
        </a>
      </li>
      <li className={classes.Navigation__item}>
        <a className={classes.Navigation__link} href="/">
          Наши агенты
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
