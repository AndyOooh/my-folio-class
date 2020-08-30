import React from 'react'

import classes from './Logo.module.css'

import myFolioLogo from '../../../assets/images/logo.png';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={myFolioLogo} alt='MyFolio Logo2' />
    </div>
  );
}

export default Logo;


