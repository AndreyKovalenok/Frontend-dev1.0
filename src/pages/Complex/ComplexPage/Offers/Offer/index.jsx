import React from "react";
import PropTypes from "prop-types";

import Button from "../../../../../components/UI/Button";

import classes from "./styles.module.scss";

const Offer = ({ title, area, price }) => (
  <li className={classes.offer}>
    <h3 className={classes.title}>{title}</h3>
    <dl className={classes.param}>
      <div className={classes.group}>
        <dt className={classes.term}>Площадь</dt>
        <dd className={classes.description}>{area}</dd>
      </div>
      <div className={classes.group}>
        <dt className={classes.term}>Стоимость</dt>
        <dd className={classes.description}>{price}</dd>
      </div>
    </dl>
    <Button className={classes.btn}>Посмотреть предложения</Button>
  </li>
);

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Offer;
