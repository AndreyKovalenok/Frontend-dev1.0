import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const PropertiesItem = ({ term, description }) => (
  <div className={classes.group}>
    <dt className={classes.term}>{term}</dt>
    <dd className={classes.description}>{description}</dd>
  </div>
);

PropertiesItem.propTypes = {
  term: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PropertiesItem;
