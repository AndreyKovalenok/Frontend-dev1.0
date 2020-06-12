/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const Slide = ({ content, scale, handleClick, transition }) => (
  <div
    css={
      scale
        ? css`
            transform: scale(0.8);
            width: 100%;
            cursor: pointer;
            transition: ease-out ${transition}s;
          `
        : css`
            width: 100%;
            transition: ease-out ${transition}s;
          `
    }
  >
    {handleClick ? (
      <div
        css={css`
      width: 100%;
      padding-bottom: 56.25%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
        role="button"
        tabIndex="0"
        onClick={(evt) => {
          evt.stopPropagation();
          handleClick();
        }}
        onKeyDown={(evt) => {
          evt.stopPropagation();
          handleClick();
        }}
      />
    ) : (
      <div
        css={css`
    width: 100%;
    padding-bottom: 56.25%;
    background-image: url('${content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `}
      />
    )}
  </div>
);

Slide.defaultProps = {
  scale: false,
  handleClick: null,
};

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  scale: PropTypes.bool,
  handleClick: PropTypes.func,
  transition: PropTypes.number.isRequired,
};

export default Slide;
