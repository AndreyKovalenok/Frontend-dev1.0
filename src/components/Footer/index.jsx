import React from "react";

import classes from "./styles.module.scss";

import Contacts from "./Contacts";
import FooterNavigation from "./FooterNavigation";

const Footer = () => (
  <footer className={classes.footer}>
    <div className="wrapper wrapper_footer">
      <Contacts />
      <div className={classes.inner}>
        <div className={classes.navigation}>
          <FooterNavigation
            title="Жилые комплексы"
            links={[
              { id: 0, name: "ВТБ Арена Парк" },
              { id: 1, name: "Садовые кварталы" },
              { id: 2, name: "Резиденция Монэ" },
            ]}
            linkToList="Все ЖК Москвы"
          />
          <FooterNavigation
            title="Компания"
            links={[
              { id: 0, name: "Команда" },
              { id: 1, name: "О компании" },
            ]}
          />
        </div>
        <p className={classes.copyright}>
          Любая информация, представленная на данном сайте, носит исключительно
          информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
