import React, { Component } from 'react';
console.log(`${process.env.REACT_APP_COINASSETS_API_KEY}`) 

class App extends Component {
  state={
    baseURL: 'http://api.coinlayer.com/api/',
    endPoint1: 'live?',
    apiKey: `access_key=${process.env.REACT_APP_COINASSETS_API_KEY}`,
    liveURL:`http://api.coinlayer.com/api/live?access_key=${process.env.REACT_APP_COINASSETS_API_KEY}` 
    
  }
  render() {
    return (
      <div>
        <a href={this.state.liveURL}>{this.state.liveURL}</a>
      </div>
    );
  }
}

export default App;
