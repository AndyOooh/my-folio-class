import React, { Component } from 'react';

const cmcApiKey = process.env.REACT_APP_cmc_api_key;

const cmcApiUrl = 'https://pro-api.coinmarketcap.com?';

const endpoint = 'CMC_PRO_API_KEY';

console.log('cmcApiKey', typeof cmcApiKey, cmcApiKey);

class App extends React.Component {

  render() {
    return <div>Div in App comp
      <div></div>
    </div>;
  }
}

export default App;
