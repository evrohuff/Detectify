import React, { Component } from 'react';
import logo from './detectifyLogo.png';
import './App.css';



class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">D E T E C T I F Y</h1>
          <img src= {logo} className="App-logo" alt="logo" />
        </header>
            <p className="App-intro">
          select scan button to begin analysis of local networks
            </p>
        <p className="App-Wrap-Button">
        <p className="button">
          <span>SCAN
          </span>
        </p>
        <p className="App-Wrap">
        <p className="App-SafeWrap">
        <p className="App-Safe">
          SAFE
          </p>
          <p className="App-intro">
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </p>
        </p>
        <p className="App-WarningWrap">
        <p className="App-Warning">
          WARNING
        </p>
        <p className="App-intro">
          Nothing to detect yet
        </p>
        </p>
        <p className="App-DangerWrap">
        <p className="App-Danger">
          DANGER
          </p>
          <p className="App-intro">
            Nothing to detect yet
          </p>
          </p>
        </p>
        </p>
      </div>
    );
  }
}

export default App;
