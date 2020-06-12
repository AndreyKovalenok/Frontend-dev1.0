/** @jsx jsx */
import { useState } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import SLiderState from "./SliderState";

const Slider = ({ slides, sliderStateHandler }) => {
  const getWidth = () => window.innerWidth * 0.66;

  const [state, setState] = useState({
    current: 0,
    translate: 0,
    transition: 0.7,
  });

  const { current, translate, transition } = state;

  const SliderCSS = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: rgba(17, 17, 17, 0.95);
  `;

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
      css={SliderCSS}
      role="button"
      tabIndex="0"
      onClick={sliderStateHandler}
      onKeyDown={sliderStateHandler}
    >
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map(({ id, image }) => {
          let SlideItem = null;

          if (id === current) {
            SlideItem = (
              <Slide key={id} content={image} transition={transition} />
            );
          } else if (id > current) {
            SlideItem = (
              <Slide
                key={id}
                content={image}
                handleClick={nextSlide}
                scale
                transition={transition}
              />
            );
          } else {
            SlideItem = (
              <Slide
                key={id}
                content={image}
                handleClick={prevSlide}
                scale
                transition={transition}
              />
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
