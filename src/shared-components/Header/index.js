import React, { Component } from "react";
import "./style.css";
import allimages from "config/images";

class Header extends Component {

state={
  isOpen:false
}

  render() {

    const{isOpen}=this.state;

    return (
      <header id="main-header" className="">
        <div className="container et_menu_container">
          <div className="logo_container">
            <a href="/#">
              <img src={allimages.logo} alt="Compass" id="logo" />
            </a>
          </div>
          <div>

         
              <div id="et_mobile_nav_menu">
                <div className={`mobile_nav `+ (isOpen ? "":"closed")}>
                  <span className="mobile_menu_bar mobile_menu_bar_toggle" onClick={()=>this.setState({isOpen:!isOpen})}>
                    <i className="fa fa-bars"></i>
                  </span>

                  <ul id="top-menu" className="nav">
                <li className="menu-item">
                  <a href="./#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="./#about">About</a>
                </li>
                <li className="menu-item">
                  <a href="./#contact">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="./#" className="hasCh">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="./#design/">Design</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#inspection-expediting/">
                        Inspection and Expediting
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="./#welding/">Welding</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#quality-support/">Quality Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#oil-gas/">Oil and Gas</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="menu-item">
                  <a href="./#career">Career</a>
                </li> */}
              </ul>
                </div>
              </div>{" "}
         

            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li className="menu-item">
                  <a href="./#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="./#about">About</a>
                </li>
                <li className="menu-item">
                  <a href="./#contact">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="./#">Services</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="./#design/">Design</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#inspection-expediting/">
                        Inspection and Expediting
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="./#welding/">Welding</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#quality-support/">Quality Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#oil-gas/">Oil and Gas</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="menu-item">
                  <a href="./#career">Career</a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
