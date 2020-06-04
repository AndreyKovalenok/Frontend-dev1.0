import React from "react";

import FavoritesButton from "../../../UI/FavoritesButton";

import classes from "./styles.module.scss";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const Photos = () => (
  <div className={classes.photos}>
    <ul className={classes.list}>
      <li className={classes.item}>
        <img className={classes.image} src={img1} alt="" />
      </li>
      <li className={classes.item}>
        <img className={classes.image} src={img2} alt="" />
      </li>
      <li className={classes.item}>
        <img className={classes.image} src={img3} alt="" />
      </li>
      <li className={classes.item}>
        <img className={classes.image} src={img4} alt="" />
      </li>
      <li className={classes.item}>
        <img className={classes.image} src={img5} alt="" />
      </li>
    </ul>
    <div className="wrapper">
      <FavoritesButton reverse className={classes.button}>
        41 фотография
      </FavoritesButton>
    </div>
  </div>
);

export default Photos;
