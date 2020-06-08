import React from "react";

import Head from "./Head";
import Photos from "./Photos";
import Info from "./Info";

import classes from "./styles.module.scss";

const CardHeading = () => (
  <section className={classes.heading}>
    <Head />
    <Photos />
    <Info
      items={[
        {
          id: 0,
          title: "950",
          subtitle: "предлоений",
        },
        {
          id: 1,
          title: "John McAslan + Partners",
          subtitle: "архитектор",
        },
        {
          id: 2,
          title: "Группа «ПСН»",
          subtitle: "застройщик",
        },
      ]}
    />
  </section>
);

export default CardHeading;
