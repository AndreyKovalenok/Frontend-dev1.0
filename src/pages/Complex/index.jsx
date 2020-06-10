import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Content from "./Content";

const Complex = ({
  match: {
    params: { id },
  },
  mainData,
}) => {
  const [complexData, setComplexData] = useState(null);

  useEffect(() => {
    const currentData = mainData.find((el) => el.id === Number(id));

    setComplexData(currentData);
  }, [mainData, id]);

  return complexData ? <Content complexData={complexData} /> : null;
};

Complex.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  mainData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Complex);
