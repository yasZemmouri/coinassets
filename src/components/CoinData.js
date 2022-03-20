import { useState } from 'react';
import Watchbton from './WatchBtn';
//how not to use (props) and use the function we pass?
const CoinData = (props) => {
    const[active, setActive]=useState(false)
    console.log(props.coin.name);
    return (
           <tr>
              <td>{props.coin.rank}</td>
              <td>
                    <a href={props.coin.websiteUrl}><img src={props.coin.icon} alt="coin logo" width="30px" /></a>
                  <span> {props.coin.name}</span>
                  </td>
                  <td>{props.coin.symbol}</td>
                  <td>{props.coin.marketCap.toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'})}</td>
                  <td>{props.coin.price.toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                  })}</td>
                  <td>{(Math.round(props.coin.availableSupply)).toLocaleString()}</td>
                  <td>{(Math.round(props.coin.volume)).toLocaleString()}</td>
                  <td>
                    <Watchbton isActive={active} onClick={()=>{
                      setActive(!active); 
                      console.log("ISACTIVE: " + active)
                      }}/>
                  </td>
            </tr> 
       
    );
}

export default CoinData;
