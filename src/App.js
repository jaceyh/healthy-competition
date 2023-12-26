import React from 'react';
import logo from './logo.svg';
import './App.css';

//import counters
import WaterCounter from './components/WaterCounter';
import VegCounter from './components/VegCounter';
import ProteinCounter from './components/ProteinCounter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counters">
        <WaterCounter />
        <VegCounter />
        <ProteinCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
