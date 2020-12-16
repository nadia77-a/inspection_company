import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <header id="main-header" className="">
        <div className="container et_menu_container">
          <div className="logo_container">
            <a href="/#">
              <img
                src="https://intersica.com/wp-content/uploads/2019/07/intersica-logo.png"
                alt="Intersica"
                id="logo"
              />
            </a>
          </div>
          <div>
            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li className="menu-item">
                  <a href="/#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="/about">About</a>
                </li>
                <li className="menu-item">
                  <a href="/contact">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="/#">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="/quality-support/">Quality Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="/manpower-services/">Manpower Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="/expediting-services/">Expediting Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="/vendor-inspection/">Vendor Inspection</a>
                    </li>
                    <li className="menu-item">
                      <a href="/pipe-mill-surveillance/">
                        Pipe Mill Surveillance
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="/career">Career</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
