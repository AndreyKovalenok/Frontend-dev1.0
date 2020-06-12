import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

const Card = ({ id, img, name, shortDescription, district, street }) => (
  <li className={classes.card}>
    <Link className={classes.link} to={`/complex/${id}`}>
      <img className={classes.image} src={img} alt={name} />
      <div className={classes.inner}>
        <p className={classes.address}>
          {district}, ул. {street}
        </p>
        <h3 className={classes.title}>{name}</h3>
        <p className={classes.description}>{shortDescription}</p>
      </div>
    </Link>
  </li>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
};

export default Card;
