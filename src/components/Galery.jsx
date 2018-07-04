import React, { Component } from 'react';
import './Galery.css'
class Galery extends Component {
  render() {
    return (
      <div className = "galery-card-container">
        <div className = "galery-card">
          <img src="http://frankfurt-business.net/wp-content/uploads/2014/09/startseite_frankfurt_beitrag.jpg" alt="" height = "100%" width = "100%"/>
        </div>
        <div className = "galery-card">
          <img src="https://img.oldthing.net/18012/29357426/0/n/Ak-Muenster-in-Westfalen-Prinzipalmarkt-mit-Lambertikirche-Geschaeft-L-A-Brinckmann-Strassenbahn.jpg" alt="" height = "100%" width = "100%"/>

        </div>
        <div className = "galery-card">
          <img src="https://st2.depositphotos.com/1225664/5452/i/950/depositphotos_54523437-stock-photo-limburg-an-der-lahn-city.jpg" alt="" height = "100%" width = "100%"/>

        </div>
        <div className = "galery-card">
          <img src="https://www.ku-images.de/img/blog/travelexperts/2013/7/heidelberg__shutterstock_57387829.jpg" alt="" height = "100%" width = "100%"/>

        </div>
        <div className = "galery-card">
          <img src="https://www.mopo.de/image/28418960/2x1/940/470/1d8a11d2fbdd763e3db6683d0f8774b2/jA/hamburg-skyline-mit-elphi.jpg" alt="" height = "100%" width = "100%"/>

        </div>
      </div>
    );
  }
}

export default Galery;