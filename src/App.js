
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import UserContext from './contexts/UserContext';
import Home from './pages/Home'
import Login from './pages/Login';
import Watchlist from './pages/Watchlist';
import Assets from './pages/Assets';
import { useState } from 'react';
import './App.css';



function App() {
  const [user, setUser]=useState('')
  
  return (
    <div>
        <UserContext.Provider value={user}>
          <Nav/>
          <Routes>
            <Route path='login' element={<Login setUser={setUser}/>}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='Watchlist' element={<Watchlist />}></Route>
            <Route path='Assets' element={<Assets />}></Route>
          </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;

