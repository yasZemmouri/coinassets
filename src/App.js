import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coinsList, setCoinsList]=useState([])
  const [userInput, setUserInput]=useState('')
  // const [searchRes, setSearchRes]=useState({})

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD'
    ).then((res) =>
      setCoinsList(res.data.coins));
  }, []);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(userInput){
      console.log('searching for', userInput);
      axios.get(`https://api.coinstats.app/public/v1/coins/${userInput.trim().toLowerCase().replace(' ', '-')}?currency=USD`)
      .then(res=>setCoinsList([res.data.coin]))
    }
    setUserInput('')
  }
  const handleChange=e=>{
    setUserInput(e.target.value)
  }

  return (
    <div>
      {console.log(coinsList)}
      {/* {console.log(coinsList)} */}
      <h1>Trade</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        id="userInput"
        onChange={handleChange}
        value={userInput}
        />
        <button>Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Volume 24hrs</th>
            <th>Watch</th>
          </tr>
        </thead>
        <tbody>

            {coinsList.map((coin, id)=>{
              return(
                <tr key={id}>
                  <td>{coin.rank}</td>
                  <td>
                    <a href={coin.websiteUrl}><img src={coin.icon} alt="coin logo" width="30px" /></a>
                    <span>{coin.name}</span>
                  </td>
                  <td>{coin.symbol}</td>
                  <td>{((Math.round(coin.marketCap)))}</td>
                  <td>{coin.price.toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                  })}</td>
                  <td>{(Math.round(coin.availableSupply)).toLocaleString()}</td>
                  <td>{(Math.round(coin.volume)).toLocaleString()}</td>
                </tr>

              )
            })}
      
        </tbody>
      </table>
    </div>
  );
}

export default App;

