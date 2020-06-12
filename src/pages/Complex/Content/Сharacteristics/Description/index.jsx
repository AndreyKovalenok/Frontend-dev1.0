import React from "react";
import PropTypes from "prop-types";

import Title from "../../Title";

import classes from "./styles.module.scss";

const Description = ({ description }) => (
  <div className={classes.description}>
    <Title className={classes.title}>Описание</Title>
    <div className={classes.inner}>
      {description.map(({ id, text }) => (
        <p className={classes.text} key={id}>
          {text}
        </p>
      ))}
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Description;
