import React from 'react';
import logo from './logo.svg';
import './App.css';
import WaterCounter from './components/WaterCounter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counters">
        <WaterCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
