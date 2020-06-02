import React from "react";

import classes from "./Footer.module.scss";

import Contacts from "./Contacts";
import FooterNavigation from "./FooterNavigation";

const Footer = () => (
  <footer className={classes.Footer}>
    <div className="wrapper wrapper_footer">
      <Contacts />

      <div className={classes.Footer__inner}>
        <div className={classes.Footer__navigation}>
          <FooterNavigation
            title="Жилые комплексы"
            links={["ВТБ Арена Парк", "Садовые кварталы", "Резиденция Монэ"]}
            linkToList="Все ЖК Москвы"
          />
          <FooterNavigation
            title="Компания"
            links={["Команда", "О компании"]}
            linkToList=""
          />
        </div>
        <p className={classes.Footer__copyright}>
          Любая информация, представленная на данном сайте, носит исключительно
          информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
