import React, { Component } from 'react';
import './Destination.css'

class Destination extends Component {
  render() {
    return (
      <div className = "container">
          <div className = "title-header">
            <p>CREATE YOUR OWN STORY!</p>
          </div>
          <div className="card-container">
            <div className="travel-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Pieter_Both%2C_mountain.jpg" alt="first-image"/>
              <div className="card-description">
                <h2>Mountain</h2>
                <p> the natural features of a landscape considered in terms of their appearance, especially when picturesque. </p>
              </div>
            </div>
            <div className="travel-card">
              <img src="http://mediad.publicbroadcasting.net/p/kplu/files/styles/x_large/public/201612/Gfp-southern-wisconsin-further-roadway-scenery-at-sunset.jpg" alt="second-image" />
              <div className="card-description">
                <h2>Mountain</h2>
                <p> the natural features of a landscape considered in terms of their appearance, especially when picturesque.</p>
              </div>
            </div>
            <div className="travel-card">
              <img src="https://www.greattibettour.com/photos/20170607/tibet-nepal-nature-scenery-tour-45072.jpg" alt="third-image"/>
              <div className="card-description">
                <h2>Mountain</h2>
                <p> the natural features of a landscape considered in terms of their appearance, especially when picturesque. </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Destination;