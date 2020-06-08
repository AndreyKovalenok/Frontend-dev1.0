import React from "react";

import CardHeading from "./CardHeading";
import Сharacteristics from "./Сharacteristics";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Location from "./Location";

import classes from "./styles.module.scss";

const CardPage = () => {
  return (
    <main className={classes.main}>
      <CardHeading />
      <Сharacteristics />
      <Infrastructure />
      <Offers />
      <Location />
    </main>
  );
};

export default CardPage;
