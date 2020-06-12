/** @jsx jsx */
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

const SliderState = ({ slidesCount, currentSlide }) => (
  <p
    css={css`
      position: fixed;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      color: var(--footer-text-color);
    `}
  >
    {currentSlide}/{slidesCount} Главный фасад
  </p>
);

SliderState.propTypes = {
  slidesCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default SliderState;
