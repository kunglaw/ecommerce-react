import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarHeader from './components/NavbarHeader';
import Advertisement from './components/Advertisement';
import Destination from './components/Destination'
import Footer from './components/Footer'
import Galery from './components/Galery'
import Testimony from './components/Testimony'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarHeader />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <Advertisement />
        <section id = "destination-container">
          <Destination />
        </section>
        <section id = "galery-container" >
          <Galery />
        </section>
        <section id = "testimony-container" >
          <Testimony />
        </section>
        <div id = "footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
