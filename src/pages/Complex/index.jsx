import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import ComplexPage from "./ComplexPage";

/*eslint-disable */
const Complex = ({
  match: {
    params: { id },
  },
}) => {
  const [complexData, setComplexData] = useState({});

  useEffect(() => {
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((json) => {
        const findedElement = json.find((el) => el.id === Number(id));

        console.log(findedElement);
        setComplexData(findedElement);
      });
  }, []);

  return <ComplexPage complexData={complexData} />;
};

export default withRouter(Complex);
