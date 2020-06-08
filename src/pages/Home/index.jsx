import React from "react";

import classes from "./styles.module.scss";

import Button from "../../components/UI/Button";
import Card from "./Card";

import bitmap3x from "./bitmap@3x.jpg";

const Home = () => {
  const cardArray = [
    {
      id: 1,
      img: bitmap3x,
      address: "Якиманка, ул. Большая Полянка",
      title: "Полянка/44",
      description:
        "Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд.",
    },
    {
      id: 2,
      img: bitmap3x,
      address: "Хамовники, ул. Ефремова",
      title: "Садовые Кварталы",
      description:
        "Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд.",
    },
    {
      id: 3,
      img: bitmap3x,
      address: "Басманный, ул. Нижняя Красносельская",
      title: "TriBeCa Apartments",
      description:
        "TriBeCa Apartments — это жилой комплекс с квартирами премиум и бизнес-класса. Корпуса спроектированы в стиле ар-деко и похожи на здания Нью-Йорка.",
    },
  ];

  return (
    <main className={classes.main}>
      <div className="wrapper">
        <div className={classes.mainHeading}>
          <h2 className={classes.title}>Discover Our New Developments</h2>
          <p className={classes.description}>
            Compass brings a modern approach to new development marketing and
            sales. From boutique rental conversions to luxurious ground-up
            condominiums, browse our portfolio of current offerings.
          </p>
          <Button>Contact The Team</Button>
        </div>
        <ul>
          {cardArray.map(({ id, img, address, title, description }) => (
            <Card
              key={id}
              img={img}
              address={address}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
