import React from "react";
import PropTypes from "prop-types";

import classes from "./FooterNavigation.module.scss";

const FooterNavigation = ({ title, links, linkToList }) => (
  <div className={classes.FooterNavigation}>
    <h4>{title}</h4>
    <ul>
      {links.map((link) => {
        return (
          <li key={Math.random().toString().slice(2)}>
            <a href="/">{link}</a>
          </li>
        );
      })}
    </ul>

    {linkToList ? (
      <a className={classes.link} href="/">
        {linkToList}
      </a>
    ) : null}
  </div>
);

FooterNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkToList: PropTypes.string.isRequired,
};

export default FooterNavigation;
