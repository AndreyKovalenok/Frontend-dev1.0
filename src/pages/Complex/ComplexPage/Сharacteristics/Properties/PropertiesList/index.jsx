import React from "react";
import PropTypes from "prop-types";

import PropertiesItem from "./PropertiesItem";

import classes from "./styles.module.scss";

const PropertiesList = ({ items }) => (
  <div className={classes.overflow}>
    <dl className={classes.list}>
      {items.map((item) => (
        <PropertiesItem
          key={item.id}
          term={item.term}
          description={item.description}
        />
      ))}
    </dl>
  </div>
);

PropertiesList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};

export default PropertiesList;
