import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';
 

const Nav = () => {
  const user=useContext(UserContext)
  const navigate = useNavigate

  console.log('nav', user)
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
         
          <div className="container flex-row">
            <Link className="navbar-brand text-primary font-weight-bold " to="/"><h1 id="logomo">coinAssets</h1></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      
            {
              !user ?
              <ul className="navbar-nav">  
                <li className="nav-item">
                <Link className="nav-link" to="login" onClick={()=>{navigate('/Login')}}><button type="submit" className="btn btn-primary" >LOGIN</button></Link>
                </li>
              </ul>  
              :
              <ul className="navbar-nav ">
                <li className="nav-item">
                <Link className="nav-link active" to="watchlist">Watch List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="assets">My Assets</Link>
                  </li>
                <li className='nav-item'>Hello {user}</li>
              </ul>        
            }
    </div>
  </div>

</nav>
    );
}

export default Nav;
