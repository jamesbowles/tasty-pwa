import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo!</h1>
        </header>
        <p className="App-intro">
        <ul>
          <li>Open the webapp in Safari</li>
          <li>Press the share button (up arrow in a square)</li>
          <li>Press "Add to Home Screen"</li>
          <li>???</li>
          <li>Profit!</li>
        </ul>
        </p>
      </div>
    );
  }
}

export default App;
