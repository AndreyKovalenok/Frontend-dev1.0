import React from "react";
import PropTypes from "prop-types";

import Title from "../Title";

import classes from "./styles.module.scss";

const Infrastructure = ({ infrastructure }) => (
  <section className={classes.infrastructure}>
    <div className="wrapper">
      <Title className={classes.title}>Инфраструктура</Title>
      <ul className={classes.list}>
        {infrastructure.map(({ id, title }) => (
          <li className={classes.item} key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Infrastructure.propTypes = {
  infrastructure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Infrastructure;
