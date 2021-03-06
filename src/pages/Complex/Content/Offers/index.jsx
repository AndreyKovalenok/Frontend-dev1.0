import React from "react";
import PropTypes from "prop-types";

import Offer from "./Offer";
import Title from "../Title";

import classes from "./styles.module.scss";

const Offers = ({ name }) => {
  const offersArray = [
    {
      id: 1,
      title: "1-комнатные квартиры",
      area: "от 59 до 120 м²",
      price: "от 20.3 до 84.2 млн руб",
    },
    {
      id: 2,
      title: "2-комнатные квартиры",
      area: "от 59 до 120 м²",
      price: "от 20.3 до 84.2 млн руб",
    },
    {
      id: 3,
      title: "3-комнатные квартиры",
      area: "от 59 до 120 м²",
      price: "от 20.3 до 84.2 млн руб",
    },
  ];

  return (
    <section className={classes.section}>
      <div className="wrapper">
        <Title className={classes.title}>Предложения в ЖК {name}</Title>
        <ul className={classes.list}>
          {offersArray.map(({ id, title, area, price }) => (
            <Offer key={id} title={title} area={area} price={price} />
          ))}
        </ul>
      </div>
    </section>
  );
};

Offers.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Offers;
