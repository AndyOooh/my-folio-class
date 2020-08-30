import React from 'react';

import classes from './Layout.module.css';

import Databar from '../../containers/Databar/Databar';
import Header from '../../Header/Header'

import FrontPage from '../../containers/FrontPage/FrontPage';

const Layout = props => {
  return (
      <div className={classes.Layout}>
        <Databar className={classes.layoutItem}>DataBar</Databar>
        <Header className={classes.layoutItem}>Header</Header>
        <FrontPage />
        <div className={classes.layoutItem}>Footer</div>
      </div>
  );
};

export default Layout;
