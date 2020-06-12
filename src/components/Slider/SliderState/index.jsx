import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const SliderState = ({ slidesCount, currentSlide }) => (
  <p className={classes.sliderState}>
    {currentSlide}/{slidesCount} Главный фасад
  </p>
);

SliderState.propTypes = {
  slidesCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default SliderState;
