import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './media/logo.png';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <Link className="App-link" to="/login">Login</Link>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;