/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Slide = ({ content, scale, handleClick }) => (
  <div
    className={classes.slide}
    css={
      scale
        ? css`
            transform: scale(0.8);
            cursor: pointer;
          `
        : null
    }
  >
    {handleClick ? (
      <div
        className={classes.slideContent}
        css={css`background-image: url('${content}');`}
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
        className={classes.slideContent}
        css={css`background-image: url('${content}');`}
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
};

export default Slide;
