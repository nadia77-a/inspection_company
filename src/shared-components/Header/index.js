import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <header
        id="main-header"
        data-height-onload="110"
        data-height-loaded="true"
        data-fixed-height-onload="110"
        className=""
      >
        <div className="container et_menu_container">
          <div className="logo_container">
            <span className="logo_helper"></span>
            <a href="https://intersica.com/">
              <img
                src="https://intersica.com/wp-content/uploads/2019/07/intersica-logo.png"
                alt="Intersica"
                id="logo"
                data-height-percentage="54"
                data-actual-width="1519"
                data-actual-height="306"
              />
            </a>
          </div>
          <div id="et-top-navigation" data-height="95" data-fixed-height="40">
            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li
                  id="menu-item-642"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-564 current_page_item menu-item-642"
                >
                  <a href="https://intersica.com/" aria-current="page">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-641"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-641"
                >
                  <a href="/about">About</a>
                </li>
                <li
                  id="menu-item-643"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-643"
                >
                  <a href="https://intersica.com/contact/">Contact</a>
                </li>
                <li
                  id="menu-item-645"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-645"
                >
                  <a href="#">Services</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-646"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-646"
                    >
                      <a href="https://intersica.com/quality-support/">
                        Quality Support
                      </a>
                    </li>
                    <li
                      id="menu-item-647"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-647"
                    >
                      <a href="https://intersica.com/manpower-services/">
                        Manpower Services
                      </a>
                    </li>
                    <li
                      id="menu-item-649"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-649"
                    >
                      <a href="https://intersica.com/expediting-services/">
                        Expediting Services
                      </a>
                    </li>
                    <li
                      id="menu-item-648"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-648"
                    >
                      <a href="https://intersica.com/vendor-inspection/">
                        Vendor Inspection
                      </a>
                    </li>
                    <li
                      id="menu-item-650"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-650"
                    >
                      <a href="https://intersica.com/pipe-mill-surveillance/">
                        Pipe Mill Surveillance
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-644"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-644"
                >
                  <a href="https://intersica.com/career/">Career</a>
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
