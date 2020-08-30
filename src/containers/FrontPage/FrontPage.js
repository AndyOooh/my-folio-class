import React, { Component } from 'react';

import classes from './FrontPage.module.css';

import CoinsTable from '../../components/CoinsTable/CoinsTable';

class FrontPage extends Component {
  render() {
    return (
      <div className={classes.LaoyoutItem}>
        <h2 className={classes.title}>Top 100 Cryptocurrencies by Market Capitalization</h2>
        <CoinsTable />
      </div>
    );
  }
}

export default FrontPage;
