//I'm missing the images and the full name of the assets only have the abriviation and the usd rate.
//the abriviation is the property name in live and the object name in list
//I have the images and the full name in the list endpoint how can I combine both?
//find a different API
import React, { Component } from 'react';
console.log(`${process.env.REACT_APP_COINASSETS_API_KEY}`) 

class App extends Component {
  state={
    baseURL: 'http://api.coinlayer.com/api/',
    endPoint1: 'live',
    endPoint2: 'list',
    apiKey: `?access_key=${process.env.REACT_APP_COINASSETS_API_KEY}`,
    coinsListURL: '',
    coinsList: {}    
  }
  componentDidMount(){
    this.setState({
      coinsListURL: this.state.baseURL+this.state.endPoint2+this.state.apiKey
    }, ()=>{
      fetch(this.state.coinsListURL)
      .then(res=>res.json())
      .then(data=>this.setState({
        coinsList: data.crypto[611].name
      }))
      .catch(error=>console.error(error))
    })
  } 

  render() {
    return (
      <div>
        <a href={this.state.coinsListURL}>{this.state.coinsListURL}</a>
        {console.log(this.state.coinsList)}
        {/* <ul>
        {this.state.coinsList.map((coin)=>{
          <li>{coin}</li>
        })}
        </ul> */}
      </div>
    );
  }
}

export default App;
