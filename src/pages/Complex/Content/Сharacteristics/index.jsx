import React from "react";
import PropTypes from "prop-types";

import Properties from "./Properties";
import Description from "./Description";

const Сharacteristics = ({ characteristics, description }) => (
  <section>
    <div className="wrapper">
      <Properties characteristics={characteristics} />
      <Description description={description} />
    </div>
  </section>
);

Сharacteristics.propTypes = {
  characteristics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      term: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Сharacteristics;
