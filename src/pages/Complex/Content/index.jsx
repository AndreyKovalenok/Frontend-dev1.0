import React, { useState } from "react";
import PropTypes from "prop-types";

import CardHeading from "./CardHeading";
import Сharacteristics from "./Сharacteristics";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Location from "./Location";
import Slider from "../../../components/Slider";

import classes from "./styles.module.scss";

import image from "./CardHeading/Photos/img4.jpg";

const Content = ({
  complexData: {
    name,
    address,
    aboutComplex,
    characteristics,
    description,
    infrastructure,
  },
}) => {
  const slides = [
    { id: 0, image },
    { id: 1, image },
    { id: 2, image },
    { id: 3, image },
    { id: 4, image },
  ];

  const [isSliderOpen, setSliderState] = useState(false);

  const sliderStateHandler = () => setSliderState(!isSliderOpen);

  return (
    <main className={classes.main}>
      <CardHeading
        name={name}
        address={address}
        aboutComplex={aboutComplex}
        sliderStateHandler={sliderStateHandler}
      />
      <Сharacteristics
        characteristics={characteristics}
        description={description}
      />
      <Infrastructure infrastructure={infrastructure} />
      <Offers name={name} />
      <Location />
      {isSliderOpen ? (
        <Slider slides={slides} sliderStateHandler={sliderStateHandler} />
      ) : null}
      ;
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
    characteristics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        term: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    infrastructure: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Content;
