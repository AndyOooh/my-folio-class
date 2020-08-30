import React, { Component } from 'react';

import classes from './Databar.module.css';

import DatabarItem from '../../components/DatabarItem/DatabarItem';

const cmcApiUrl = 'https://pro-api.coinmarketcap.com/';
const endpoint = 'v1/global-metrics/quotes/latest';
const apiKeyName = '?CMC_PRO_API_KEY=';
const cmcApiKey = process.env.REACT_APP_cmc_api_key;


class Databar extends Component {
  state = {};

  fetchData = () => {
    console.log('inside fetchData');
    fetch(cmcApiUrl + endpoint + apiKeyName + cmcApiKey)
      .then(response => {
        console.log('response', response);
        console.log(response.body);
        return response.json();
      })
      .then(responseJson => {
        console.log('responseJson', responseJson);
        const newState = { ...this.state, ...responseJson.data, ...responseJson.data.quote.USD };
        delete newState.quote;
        this.setState(newState);
        console.log('this.state', this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log('CDM');
    this.fetchData();
  }

  render() {
    const stateKeys = Object.entries(this.state).map(([key, value]) => {
      return <DatabarItem key={key} name={key} value={value} />;
    });
    return (
      <div className={classes.tcontainer}>
        <div className={classes.twrap}>
          <div className={classes.tmove}>{stateKeys}</div>
        </div>
      </div>
    );  
  }
}

export default Databar;
