import React, { Component } from 'react';

import classes from './Header.module.css';

import Home from '../components/Home/Home';
import myFolioLogo from '../assets/images/logo.png';

import Logo from '../components/UI/Logo/Logo';
import NavigationItems from '../components/UI/Navigation/NavigationItems';


class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        {/* <Home className={`${classes.items} ${classes.item1}`}>Home</Home> */}
        <Logo />
        <NavigationItems />
        <div className={`${classes.items} ${classes.item5}`}>Empty space</div>
        <div className={`${classes.items} ${classes.item3}`}>Search</div>
        <div className={`${classes.items} ${classes.item4}`}>Log In / Sign up</div>
      </div>
    );
  }
}

export default Header;
