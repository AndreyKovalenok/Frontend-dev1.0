import React from "react";

import Head from "./Head";
import Photos from "./Photos";
import Info from "./Info";

import classes from "./styles.module.scss";

const CardHeading = () => (
  <section className={classes.heading}>
    <Head />
    <Photos />
    <Info />
  </section>
);

export default CardHeading;
