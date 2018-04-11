import React, { Component } from 'react';
import logo from './detectifyLogo.png';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={ networks: []}

    this.fetchData = this.fetchData.bind(this);
  }

  /*componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }*/

  fetchData() {
    var that = this;

    fetch('/users')
      .then(function(response){
        return response.json();
      }).then(function(json){
        var theNetworks = Object.values(json);
        console.log(theNetworks);
        that.setState({networks: theNetworks[0]});
      });
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

        <div className="App-Wrap-Button">
          <p onClick={this.fetchData} className="button">
            <span>SCAN
            </span>
          </p>
          <div className="App-Wrap">
            <div className="App-SafeWrap">
              <p className="App-Safe">
                SAFE
              </p>
              <div className="App-intro">
                {this.state.networks.map(function(network) {
                  return (
                    <div key={network.id} className="network">
                      SSID: {network.ssid}<br/>
                      MAC: {network.mac}<br/>
                      CHANNEL: {network.channel}<br/><br/>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="App-WarningWrap">
              <p className="App-Warning">
                WARNING
              </p>
              <p className="App-intro">
                Nothing to detect yet
              </p>
          </div>
            <div className="App-DangerWrap">
              <p className="App-Danger">
                DANGER
              </p>
              <p className="App-intro">
                Nothing to detect yet
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
