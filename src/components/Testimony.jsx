import React, { Component } from 'react';
import './Testimony.css'
class Testimony extends Component {
  render() {
    return (
      <div className = "container-testimony">
        <div className = "image-testimony-container">
        </div>
        <div className = "text-testimony-container">
          <p>" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident. "</p>
          <div style = {{ textAlign: "end"}}>
            <small> -- Manusia Biasa</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimony;