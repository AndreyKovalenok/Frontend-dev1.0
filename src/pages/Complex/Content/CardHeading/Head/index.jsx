import React from "react";
import PropTypes from "prop-types";

import FavoritesButton from "../../../../../components/UI/FavoritesButton";

import classes from "./styles.module.scss";

const Head = ({
  name,
  address: { district, street, houseNumber, postcode },
}) => (
  <div className={classes.head}>
    <div className={`wrapper ${classes.wrapperModification}`}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Жилой комплекс {name}</h1>
        <p className={classes.address}>
          Район {district}, улица {street}, дом {houseNumber} • {postcode}
        </p>
      </div>
      <FavoritesButton className={classes.button}>В избранное</FavoritesButton>
    </div>
  </div>
);

Head.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    district: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
    postcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default Head;
