import React from "react";
import PropTypes from "prop-types";

import PropertiesItem from "./PropertiesItem";
import Title from "../../Title";

import classes from "./styles.module.scss";

const Properties = ({ characteristics }) => {
  return (
    <div className={classes.properties}>
      <Title className={classes.title}>Характеристики</Title>
      <div className={classes.overflow}>
        <dl className={classes.list}>
          {characteristics.map(({ id, term, description }) => (
            <PropertiesItem key={id} term={term} description={description} />
          ))}
        </dl>
      </div>
    </div>
  );
};

Properties.propTypes = {
  characteristics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      term: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Properties;
