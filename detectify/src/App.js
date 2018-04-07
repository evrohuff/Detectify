import React, { Component } from 'react';
import logo from './detectifyLogo.png';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">D E T E C T I F Y</h1>
          <img src= {logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          click the button below <br /> to begin scanning local networks
        </p>
        <button className="button">
          <span>SCAN
          </span>
        </button>
      </div>
    );
  }
}

export default App;
