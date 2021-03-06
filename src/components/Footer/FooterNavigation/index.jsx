import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const FooterNavigation = ({ title, links, linkToList }) => {
  return (
    <div className={classes.navigation}>
      <h4 className={classes.title}>{title}</h4>
      <ul className={classes.list}>
        {links.map(({ id, name }) => {
          return (
            <li className={classes.item} key={id}>
              <a className={classes.link} href="/">
                {name}
              </a>
            </li>
          );
        })}
      </ul>

      {linkToList ? (
        <a className={classes.linkToList} href="/">
          {linkToList}
        </a>
      ) : null}
    </div>
  );
};

FooterNavigation.defaultProps = {
  linkToList: "",
};

FooterNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  linkToList: PropTypes.string,
};

export default FooterNavigation;
