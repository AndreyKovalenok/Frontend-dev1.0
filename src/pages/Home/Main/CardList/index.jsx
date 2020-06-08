import React from "react";
import Card from "./Card";

// import bitmap from "./bitmap.jpg";
// import bitmap2x from "./bitmap@2x.jpg";
import bitmap3x from "./bitmap@3x.jpg";
/* eslint-disable */
const CardList = ({ cards }) => (
  <ul>
    {cards.map(({ address = "Адрес" }) => {
      return (
        <Card
          id={1}
          img={bitmap3x}
          address={address}
          title="Полянка/44"
          description="Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд."
        />
      );
    })}
    <Card
      id={1}
      img={bitmap3x}
      address="Якиманка, ул. Большая Полянка"
      title="Полянка/44"
      description="Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд."
    />
    <Card
      id={2}
      img={bitmap3x}
      address="Хамовники, ул. Ефремова"
      title="Садовые Кварталы"
      description="Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд."
    />
    <Card
      id={3}
      img={bitmap3x}
      address="Басманный, ул. Нижняя Красносельская"
      title="TriBeCa Apartments"
      description="TriBeCa Apartments — это жилой комплекс с квартирами премиум и бизнес-класса. Корпуса спроектированы в стиле ар-деко и похожи на здания Нью-Йорка."
    />
  </ul>
);

export default CardList;
