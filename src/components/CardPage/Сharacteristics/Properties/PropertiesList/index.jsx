import React from "react";

import PropertiesItem from "./PropertiesItem";

import classes from "./styles.module.scss";

const PropertiesList = () => (
  <dl className={classes.list}>
    <PropertiesItem term="Количество квартир" description="1 503" />
    <PropertiesItem term="Конструкция корпусов" description="монолит" />
    <PropertiesItem
      term="Начало строительства"
      description="I квартал 2012 года"
    />
    <PropertiesItem term="Статус" description="Квартиры" />
    <PropertiesItem term="Площадь" description="от 50 до 154 м²" />
    <PropertiesItem
      term="Конец строительства"
      description="IV квартал 2018 года"
    />
    <PropertiesItem term="Цены" description="от 5.3 до 143.5 млн" />
    <PropertiesItem term="Высота потолков" description="3.45 − 5 м" />
    <PropertiesItem term="Наземная парковка" description="1 500 м/м" />
    <PropertiesItem term="Безопасность" description="Охраняемая территория" />
    <PropertiesItem term="Обслуживание" description="1 200 руб / м² / месяц" />
    <PropertiesItem term="Подземная парковка" description="Нет" />
  </dl>
);

export default PropertiesList;
