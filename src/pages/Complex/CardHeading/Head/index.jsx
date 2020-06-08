import React from "react";

import FavoritesButton from "../../../../components/UI/FavoritesButton";

import classes from "./styles.module.scss";

const Head = () => (
  <div className={classes.head}>
    <div className={`wrapper ${classes.wrapperModification}`}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Жилой комплекс «Полянка/44»</h1>
        <p className={classes.address}>
          Район Якиманка, улица Большая Полянка, дом 44 • 119180
        </p>
      </div>
      <FavoritesButton className={classes.button}>В избранное</FavoritesButton>
    </div>
  </div>
);

export default Head;
