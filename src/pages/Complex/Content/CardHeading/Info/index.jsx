import React from "react";
import PropTypes from "prop-types";

import InfoItem from "./InfoItem";

import classes from "./styles.module.scss";

const Info = ({ mainInfo }) => (
  <div className="wrapper">
    <ul className={classes.list}>
      {mainInfo.map(({ id, title, subtitle }) => (
        <InfoItem key={id} title={title} subtitle={subtitle} />
      ))}
    </ul>
  </div>
);

Info.propTypes = {
  mainInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Info;
