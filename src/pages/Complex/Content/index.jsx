import React from "react";
import PropTypes from "prop-types";

import CardHeading from "./CardHeading";
import Сharacteristics from "./Сharacteristics";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Location from "./Location";

import classes from "./styles.module.scss";

const Content = ({ complexData: { name, address, aboutComplex } }) => {
  return (
    <main className={classes.main}>
      <CardHeading name={name} address={address} aboutComplex={aboutComplex} />
      <Сharacteristics />
      <Infrastructure />
      <Offers />
      <Location />
    </main>
  );
};

Content.propTypes = {
  complexData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    aboutComplex: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Content;
