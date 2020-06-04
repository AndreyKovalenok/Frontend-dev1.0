import React from "react";

import InfoItem from "./InfoItem";

import classes from "./styles.module.scss";

const Info = () => (
  <div className="wrapper">
    <ul className={classes.list}>
      <InfoItem title="950" subtitle="предлоений" />
      <InfoItem title="John McAslan + Partners" subtitle="архитектор" />
      <InfoItem title="Группа «ПСН»" subtitle="застройщик" />
    </ul>
  </div>
);

export default Info;
