import React from "react";
import PropTypes from "prop-types";

import classes from "./Card.module.scss";

const Card = ({ img, address, title, description }) => (
  <li className={classes.Card}>
    <img
      className={classes.Card__img}
      src={img}
      alt={title}
      width="491"
      height="350"
    />
    <div className={classes.Card__descriptionWrapper}>
      <p className={classes.Card__address}>{address}</p>
      <h3 className={classes.Card__title}>{title}</h3>
      <p className={classes.Card__description}>{description}</p>
    </div>
  </li>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
