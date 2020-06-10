import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

import Button from "../../components/UI/Button";
import Card from "./Card";

import bitmap3x from "./bitmap@3x.jpg";

const Home = ({ mainData }) => {
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
        <ul>
          {mainData.map(
            ({ id, name, shortDescription, address: { district, street } }) => (
              <Card
                key={id}
                id={id}
                img={bitmap3x}
                name={name}
                shortDescription={shortDescription}
                district={district}
                street={street}
              />
            )
          )}
        </ul>
      </div>
    </main>
  );
};

Home.propTypes = {
  mainData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      address: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ).isRequired,
    })
  ).isRequired,
};

export default Home;
