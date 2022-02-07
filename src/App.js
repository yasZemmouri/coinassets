import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

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
      .catch(err=>console.log(err))
    }
    setUserInput('')
  }
  const handleChange=e=>{
    setUserInput(e.target.value)
  }

  return (
    <div>
      {console.log(coinsList)}
      <h1>Trade</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        id="userInput"
        onChange={handleChange}
        value={userInput}
        />
        <button>Search</button>
      </form>
      {(coinsList[0] !==undefined) ?
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
                  <td>
                    <button aria-label="add to watchlist" aria-selected="true">
                      <svg hight="23" width="24" viewBox="0 0 24 23" filled="1" fill="none" focusable="false" aria-hidden='true' >
                        <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" ></path>
                      </svg>
                    </button>
                  </td>
                </tr>

              )
            }
            
          )
          }
        </tbody>
      </table>
      :<h2>Coin not found</h2>
      }
    </div>
  );
}

export default App;

