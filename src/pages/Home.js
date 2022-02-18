import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CoinData from '../components/CoinData';

const Home = () => {
    
    const [userInput, setUserInput]=useState('')
    const [loading, setLoading]=useState(false)
    const [coinsList, setCoinsList]=useState([])
    {console.log(coinsList)}
    
   
  
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
        <main>
        <div className="container">
          <div className="nav-spacer"></div>
      <h1>Trade</h1>
      <form className="d-flex m-2 mx-auto" onSubmit={handleSubmit}>
        <input type="search" 
        id="userInput" className="form-control me-2" placeholder="Enter coin's name..." aria-label="Search" 
        onChange={handleChange}
        value={userInput}
        />
        <button id="busqueda" className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      {(userInput && loading &&  <img src='https://i.stack.imgur.com/hzk6C.gif' alt='' id="loading"/>)|| 
      (coinsList[0] !==undefined &&
      <table className="table table-striped table-hover">
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
      </main>
    );
}

export default Home;
