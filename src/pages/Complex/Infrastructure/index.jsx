import React from "react";

import Title from "../Title";

import classes from "./styles.module.scss";

const Infrastructure = () => (
  <section className={classes.infrastructure}>
    <div className="wrapper">
      <Title className={classes.title}>Инфраструктура</Title>
      <ul className={classes.list}>
        <li className={classes.item}>Бассейн</li>
        <li className={classes.item}>Детский сад</li>
        <li className={classes.item}>Частная школа</li>
        <li className={classes.item}>Бассейн</li>
        <li className={classes.item}>Детский сад</li>
        <li className={classes.item}>Частная школа</li>
        <li className={classes.item}>Частная школа</li>
        <li className={classes.item}>Частная школа</li>
        <li className={classes.item}>Частная школа</li>
      </ul>
    </div>
  </section>
);

export default Infrastructure;
