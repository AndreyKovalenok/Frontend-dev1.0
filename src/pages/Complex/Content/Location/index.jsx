import React from "react";

import Title from "../Title";

import classes from "./styles.module.scss";

import photo from "./polyanka-photo@3x.jpg";
import map from "./map@3x.png";

const Location = () => (
  <section className={classes.location}>
    <div className={classes.inner}>
      <div className={classes.description}>
        <Title className={classes.title}>Якиманка</Title>
        <p className={classes.subtitle}>
          Исторический центр Москвы в двух километрах от Кремля
        </p>
        <a className={classes.link} href="/">
          Гид по Якиманке →
        </a>
      </div>
      <img
        className={classes.image}
        src={photo}
        alt="Якиманка - исторический центр Москвы"
      />
    </div>
    <div className={classes.inner}>
      <img
        className={classes.map}
        src={map}
        alt="Карта с расположением жилого комплеса Полянка/44"
      />
      <dl className={classes.address}>
        <div className={classes.group}>
          <dt className={classes.term}>Красный Октябрь</dt>
          <dd className={classes.param}>24 минуты, 6 км</dd>
        </div>
        <div className={classes.group}>
          <dt className={classes.term}>World class</dt>
          <dd className={classes.param}>2 минуты, 300 м</dd>
        </div>
        <div className={classes.group}>
          <dt className={classes.term}>Третьяковская галерея</dt>
          <dd className={classes.param}>14 минут, 4 км</dd>
        </div>
      </dl>
    </div>
  </section>
);

export default Location;
