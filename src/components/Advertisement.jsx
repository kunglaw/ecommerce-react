import React, { Component } from 'react';
import './Advertisement.css'
class Advertisement extends Component {
  render() {
    return (
      <div className = "advertisement-container">
        <div className = "advertisement-box">
          <div className="title-box">
            <h1>Lorem Ipsum</h1>
          </div>
          <div className="content-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisement;