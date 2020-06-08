import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

const Card = ({ img, address, title, description, id }) => (
  <li className={classes.card}>
    <Link className={classes.link} to={`/complex/${id}`}>
      <img className={classes.image} src={img} alt={title} />
      <div className={classes.inner}>
        <p className={classes.address}>{address}</p>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  </li>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
