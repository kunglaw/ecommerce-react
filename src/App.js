import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarHeader from './components/NavbarHeader';
import Advertisement from './components/Advertisement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarHeader />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <Advertisement />
      </div>
    );
  }
}

export default App;
