import React, { Component } from 'react';

import classes from './CoinsTable.module.css';

import TitleBar from './CoinsTableTitlebar/CoinsTableTitlebar';
import TableRows from './CoinsTableRow/CoinsTableRow';

const cmcApiUrl = 'https://pro-api.coinmarketcap.com/';
const endpoint = 'v1/cryptocurrency/listings/latest';
const apiKeyName = '?CMC_PRO_API_KEY=';
const cmcApiKey = process.env.REACT_APP_cmc_api_key;

const nfObject = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 });

class CoinsTable extends Component {
  state = {
    // 101: 'hello',
    // abc: 'abc',
  };

  fetchData = () => {
    console.log('inside fetchData');
    fetch(cmcApiUrl + endpoint + apiKeyName + cmcApiKey)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        Object.entries(responseJson.data).forEach(([key]) => {
          responseJson.data[key] = {
            ...responseJson.data[key],
            ...responseJson.data[key].quote.USD,
          };
          delete responseJson.data[key].quote;
        });
        const newState = { ...this.state, ...responseJson.data };
        this.setState(newState);
        console.log('CoinsTable-state', this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log('CDM');
    this.fetchData();
  }

  thousandSeparator = num => {
    return nfObject.format(num);
  };

  priceFormat = (number, currency) => {
    return isNaN(number)
      ? 'NaN'
      // : currency === '%'
      // ? `${currency}${this.thousandSeparator(number.toFixed(2))}`
      : currency !== '$'
      ? `${this.thousandSeparator(Math.round(number))} ${currency}`
      : number >= 1 || currency === '%'
      ? `${currency}${this.thousandSeparator(number.toFixed(1))}`
      // ? `${currency}${this.thousandSeparator.minimumFractionDigits(number)}`
      : `${currency}${this.thousandSeparator(number.toFixed(6))}`;
  };

  render() {
    const tableRows = Object.entries(this.state)
      // .slice(0, 100)
      .map(([key, value]) => {
        return (
          <TableRows
            key={value.id}
            // id={value.id}
            rank={parseInt(key) + 1}
            // logo={value.logo}
            name={value.name}
            marketCap={this.priceFormat(value.market_cap, '$')}
            price={this.priceFormat(value.price, '$')}
            volume={this.priceFormat(value.volume_24h, '$')}
            circSupply={this.priceFormat(value.circulating_supply, value.symbol)}
            Change24={this.priceFormat(value.percent_change_24h, '%')}
            // graph={value.}
          />
        );
      });
    return (
      <div className={classes.gridContainer}>
        <TitleBar />
        {tableRows}
      </div>
    );
  }
}

export default CoinsTable;
