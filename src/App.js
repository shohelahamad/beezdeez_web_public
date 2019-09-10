import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo-stl" alt="logo" />
        <h3>
          We are coming soon to make your daily routine smarter########
        </h3>
      </header>
    </div>
  );
}

export default App;
