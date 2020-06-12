import React, { useState } from "react";
import PropTypes from "prop-types";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import SLiderState from "./SliderState";

import classes from "./styles.module.scss";

const Slider = ({ slides, sliderStateHandler }) => {
  const getWidth = () => window.innerWidth * 0.66;

  const [state, setState] = useState({
    current: 0,
    translate: 0,
  });

  const { current, translate } = state;

  const nextSlide = () => {
    setState({
      ...state,
      current: current + 1,
      translate: (current + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      current: current - 1,
      translate: (current - 1) * getWidth(),
    });
  };

  return (
    <div
      className={classes.slider}
      role="button"
      tabIndex="0"
      onClick={sliderStateHandler}
      onKeyDown={sliderStateHandler}
    >
      <SliderContent translate={translate} width={getWidth() * slides.length}>
        {slides.map(({ id, image }) => {
          let SlideItem = null;

          if (id === current) {
            SlideItem = <Slide key={id} content={image} />;
          } else if (id > current) {
            SlideItem = (
              <Slide key={id} content={image} handleClick={nextSlide} scale />
            );
          } else {
            SlideItem = (
              <Slide key={id} content={image} handleClick={prevSlide} scale />
            );
          }

          return SlideItem;
        })}
      </SliderContent>
      <SLiderState slidesCount={slides.length} currentSlide={current + 1} />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  sliderStateHandler: PropTypes.func.isRequired,
};

export default Slider;
