import React from 'react';

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  const navNames = ['Demo', 'Tools', 'Learn', 'Something', 'Lala'];
  const navigationItems = navNames.map(name => {
    return (
      <li className={classes[name]} key={name}>
        <a href='#'>{name}</a>
      </li>
    );
  });

  return <ul className={classes.Navigation}>{navigationItems}</ul>;
};

export default NavigationItems;
