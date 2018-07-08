import React, { Component } from 'react';
import './NavbarHeader.css'

class NavbarHeader extends Component {
  render() {
    return (
      <div className = "header-container">
        <div className = "logo-container">
          <p> Travel</p>
        </div>
        <div className = "menu-container">
          <div className="menu-list">
            <p>About Us</p>
          </div>
          <div className="menu-list">
            <p>Services</p>
          </div>
          <div className="menu-list">
            <p>Products</p>
          </div>
          <div className="menu-list">
            <p>Gallery</p>
          </div>
          <div className="menu-list">
            <p>Contacts</p>
          </div>
        </div>
        <div className = "icon-container">
          <a href="#" className="list-group-item"><i className="fa fa-user fa-fw"></i></a>
          <a href="#" className="list-group-item"><i className="fa fa-shopping-cart fa-fw"></i></a>
          <a href="#" className="list-group-item"><i className="fa fa-home fa-fw"></i></a>
        </div>
      </div>
    );
  }
}

export default NavbarHeader;