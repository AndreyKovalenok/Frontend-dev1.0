import React from "react";

import PropertiesList from "./PropertiesList";
import Title from "../../Title";

import classes from "./styles.module.scss";

const Properties = () => {
  const items = [
    {
      id: 0,
      term: "Количество квартир",
      description: "1 503",
    },
    {
      id: 1,
      term: "Конструкция корпусов",
      description: "монолит",
    },
    {
      id: 2,
      term: "Начало строительства",
      description: "I квартал 2012 года",
    },
    {
      id: 3,
      term: "Статус",
      description: "Квартиры",
    },
    {
      id: 4,
      term: "Площадь",
      description: "от 50 до 154 м²",
    },
    {
      id: 5,
      term: "Конец строительства",
      description: "IV квартал 2018 года",
    },
    {
      id: 6,
      term: "Цены",
      description: "от 5.3 до 143.5 млн",
    },
    {
      id: 7,
      term: "Высота потолков",
      description: "3.45 − 5 м",
    },
    {
      id: 8,
      term: "Наземная парковка",
      description: "1 500 м/м",
    },
    {
      id: 9,
      term: "Безопасность",
      description: "Охраняемая территория",
    },
    {
      id: 10,
      term: "Обслуживание",
      description: "1 200 руб / м² / месяц",
    },
    {
      id: 11,
      term: "Подземная парковка",
      description: "Нет",
    },
  ];

  return (
    <div className={classes.properties}>
      <Title className={classes.title}>Характеристики</Title>
      <PropertiesList items={items} />
    </div>
  );
};

export default Properties;
