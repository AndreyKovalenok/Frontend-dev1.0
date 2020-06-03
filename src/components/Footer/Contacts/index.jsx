import React from "react";

import classes from "./styles.module.scss";

const Contacts = () => (
  <div className={classes.contacts}>
    <h4 className={classes.title}>ООО «Ярд»</h4>
    <p className={classes.account}>ОГРН 1175074002531</p>
    <p className={classes.account}>ИНН 5036165365</p>
    <a className={classes.phone} href="tel:+79998211488">
      +7 (999) 821-14-88
    </a>
  </div>
);

export default Contacts;
