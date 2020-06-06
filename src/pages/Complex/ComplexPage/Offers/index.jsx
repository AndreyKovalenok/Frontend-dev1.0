import React from "react";

import OffersList from "./OffersList";
import Title from "../Title";

import classes from "./styles.module.scss";

const Offers = () => (
  <section className={classes.section}>
    <div className="wrapper">
      <Title className={classes.title}>Предложения в ЖК «Полянка/44»</Title>
      <OffersList />
    </div>
  </section>
);

export default Offers;
