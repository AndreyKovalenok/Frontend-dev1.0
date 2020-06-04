import React from "react";

import PropertiesList from "./PropertiesList";
import Title from "../../Title";

import classes from "./styles.module.scss";

const Properties = () => (
  <div className={classes.properties}>
    <Title className={classes.title}>Характеристики</Title>
    <PropertiesList />
  </div>
);

export default Properties;
