import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const InfoItem = ({ title, subtitle }) => (
  <li className={classes.item}>
    <p className={classes.title}>{title}</p>
    <p className={classes.subtitle}>{subtitle}</p>
  </li>
);

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default InfoItem;
