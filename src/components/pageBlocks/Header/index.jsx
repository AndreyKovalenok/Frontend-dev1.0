import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../../UI/Navigation";
import Logo from "../../graphics/Logo";
import MenuToggle from "../../UI/MenuToggle";

import BigLogo from "./compass-development-logo.svg";

import classes from "./styles.module.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOn: false };
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
  }

  toggleMenuHandler() {
    const { isMenuOn } = this.state;

    this.setState({
      isMenuOn: !isMenuOn,
    });
  }

  render() {
    const { isMenuOn } = this.state;

    return (
      <header className={classes.header}>
        <div className={classes.border}>
          <div className="wrapper">
            <div className={classes.topPanel}>
              <Logo />
              <Navigation isOpen={isMenuOn} />
              <MenuToggle onToggle={this.toggleMenuHandler} isOpen={isMenuOn} />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <div className={classes.headerFill}>
              <img
                className={classes.image}
                src={BigLogo}
                alt="Компания Compass Development"
              />
            </div>
          </Route>
        </Switch>
      </header>
    );
  }
}

export default Header;
