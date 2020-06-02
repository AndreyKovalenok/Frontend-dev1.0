import React from "react";

import classes from "./Cantact.module.scss";

const Contacts = () => (
  <div className={classes.Contacts}>
    <h4 className={classes.Contacts__title}>ООО «Ярд»</h4>
    <p className={classes.Contacts__account}>ОГРН 1175074002531</p>
    <p className={classes.Contacts__account}>ИНН 5036165365</p>
    <a className={classes.Contacts__phone} href="tel:+79998211488">
      +7 (999) 821-14-88
    </a>
  </div>
);

export default Contacts;
