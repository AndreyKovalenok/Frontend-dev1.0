import React from "react";

import Properties from "./Properties";
import Description from "./Description";

import classes from "./styles.module.scss";

const Сharacteristics = () => (
  <section>
    <div className={`wrapper ${classes.wrapper}`}>
      <Properties />
      <Description />
    </div>
  </section>
);

export default Сharacteristics;
