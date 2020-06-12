import React from "react";
import PropTypes from "prop-types";

import FavoritesButton from "../../../../../components/UI/FavoritesButton";

import classes from "./styles.module.scss";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const Photos = ({ sliderStateHandler }) => (
  <div className={classes.photos}>
    <div className={classes.gallery}>
      <img
        className={classes.image}
        src={img1}
        alt="Жилой комплекс Полянка/44 вид сбоку"
      />
      <img
        className={classes.image}
        src={img2}
        alt="Жилой комплекс Полянка/44 вид сверху"
      />
      <img
        className={classes.image}
        src={img3}
        alt="Жилой комплекс Полянка/44 вид снизу"
      />
      <img
        className={classes.image}
        src={img4}
        alt="Жилой комплекс Полянка/44 вид улицы"
      />
      <img
        className={classes.image}
        src={img5}
        alt="Жилой комплекс Полянка/44 вид днем"
      />
    </div>
    <div className="wrapper">
      <FavoritesButton
        onClick={sliderStateHandler}
        reverse
        className={classes.button}
      >
        41 фотография
      </FavoritesButton>
    </div>
  </div>
);

Photos.propTypes = {
  sliderStateHandler: PropTypes.func.isRequired,
};

export default Photos;
