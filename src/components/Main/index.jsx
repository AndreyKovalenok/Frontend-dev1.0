import React from "react";

import classes from "./styles.module.scss";

import Button from "../UI/Button";
import CardList from "../CardList";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className="wrapper">
        <div className={classes.mainHeading}>
          <h2 className={classes.title}>Discover Our New Developments</h2>
          <p className={classes.description}>
            Compass brings a modern approach to new development marketing and
            sales. From boutique rental conversions to luxurious ground-up
            condominiums, browse our portfolio of current offerings.
          </p>
          <Button>Contact The Team</Button>
        </div>
        <CardList />
      </div>
    </main>
  );
};

export default Main;
