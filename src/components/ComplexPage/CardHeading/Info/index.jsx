import React from "react";
import PropTypes from "prop-types";

import InfoItem from "./InfoItem";

import classes from "./styles.module.scss";

const Info = ({ items }) => (
  <div className="wrapper">
    <ul className={classes.list}>
      {items.map((item) => (
        <InfoItem key={item.id} title={item.title} subtitle={item.subtitle} />
      ))}
    </ul>
  </div>
);

Info.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};

export default Info;
