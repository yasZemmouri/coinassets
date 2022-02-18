
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import UserContext from './contexts/UserContext';
import Login from './pages/Login';
import './App.css';
import Home from './pages/Home'
import { useState } from 'react';



function App() {
  const [user, setUser]=useState('')
  
  return (
    <div>
        <UserContext.Provider value={user}>
          <Nav/>
          <Routes>
            <Route path='login' element={<Login setUser={setUser}/>}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;

