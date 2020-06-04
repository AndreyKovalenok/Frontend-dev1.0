import React from "react";

import Offer from "./Offer";

import classes from "./styles.module.scss";

const OffersList = () => (
  <ul className={classes.list}>
    <Offer
      title="1-комнатные квартиры"
      area="от 59 до 120 м²"
      price="от 20.3 до 84.2 млн руб"
    />
    <Offer
      title="2-комнатные квартиры"
      area="от 59 до 120 м²"
      price="от 20.3 до 84.2 млн руб"
    />
    <Offer
      title="3-комнатные квартиры"
      area="от 59 до 120 м²"
      price="от 20.3 до 84.2 млн руб"
    />
  </ul>
);

export default OffersList;
