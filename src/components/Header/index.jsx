import React from "react";

import Navigation from "../UI/Navigation";
import Logo from "../Logo";
import MenuToggle from "../UI/MenuToggle";

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
        <div className="wrapper">
          <div className={classes["top-panel"]}>
            <Logo />
            <Navigation isOpen={isMenuOn} />
            <MenuToggle onToggle={this.toggleMenuHandler} isOpen={isMenuOn} />
          </div>
        </div>
        <div className={classes["header-fill"]}>
          <img
            className={classes.image}
            src={BigLogo}
            alt="Компания Compass Development"
          />
        </div>
      </header>
    );
  }
}

export default Header;
