import React from "react";
import PropTypes from "prop-types";

import Head from "./Head";
import Photos from "./Photos";
import Info from "./Info";

import classes from "./styles.module.scss";

const CardHeading = ({ name, address, mainInfo, sliderStateHandler }) => (
  <section className={classes.heading}>
    <Head name={name} address={address} />
    <Photos sliderStateHandler={sliderStateHandler} />
    <Info mainInfo={mainInfo} />
  </section>
);

CardHeading.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  mainInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  sliderStateHandler: PropTypes.func.isRequired,
};

export default CardHeading;
