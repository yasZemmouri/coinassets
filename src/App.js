import { useEffect, useState } from 'react';
import axios from 'axios';
import CoinData from './components/CoinData';
import './App.css'


function App() {
  const [coinsList, setCoinsList]=useState([])
  const [userInput, setUserInput]=useState('')
  const [loading, setLoading]=useState(false)
  // const [searchRes, setSearchRes]=useState({})

  useEffect(() => {
    setLoading(true)
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD'
    ).then((res) =>{
        setCoinsList(res.data.coins)
        setLoading(false)
      }
      )
  }, []);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    if(userInput){
      console.log('searching for', userInput);
      axios.get(`https://api.coinstats.app/public/v1/coins/${userInput.trim().toLowerCase().replace(' ', '-')}?currency=USD`)
      .then(res=>{
        setCoinsList([res.data.coin]);
        setLoading(false)
      })
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
      {(loading &&  <img src='https://i.stack.imgur.com/hzk6C.gif' alt=''/>)|| 
      (coinsList[0] !==undefined &&
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
            {coinsList.map((coin)=>{
              return(
                <CoinData coin={coin}/>
              )
            }
            
          )
          }
        </tbody>
      </table>)||
      <h2>Coin not found</h2>
      }
    </div>
  );
}

export default App;

