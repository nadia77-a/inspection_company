import React, { Component } from "react";
import "./style.css";
import allimages from "config/images";

class Header extends Component {

state={
  isOpen:false,
  top: false,
}



componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
  window.addEventListener("scroll", () => {
    if (!this.state.top) {
      if (window.scrollY > 50) {
        this.setState({ top: true });
      }
    } else {
      if (window.scrollY < 50) {
        this.setState({ top: false });
      }
    }
  });
}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}


  setWrapperRef=(node)=> {
    this.wrapperRef = node;
  }

  handleClickOutside=(event) =>{
    if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
     this.setState({isOpen:!this.state.isOpen})
    }
  }

  render() {

    const{isOpen,top}=this.state;

    return (
      <header id="main-header" className="">
        <div className="container et_menu_container">
          <div className="logo_container">
            <a href="./#home">
              <img src={top ? allimages.logo:allimages.logo1} alt="Compass" id="logo" />
            </a>
          </div>
          <div>

         
              <div id="et_mobile_nav_menu">
                <div className={`mobile_nav `+ (isOpen ? "":"closed")}>
                  <span className="mobile_menu_bar mobile_menu_bar_toggle" onClick={()=>this.setState({isOpen:!isOpen})}>
                    <i className="fa fa-bars"></i>
                  </span>

                  <ul id="top-menu" className="nav" ref={this.setWrapperRef}>
                <li className="menu-item">
                  <a href="./#home">Home</a>
                </li>
                {/* <li className="menu-item">
                  <a href="./#about">Projects</a>
                </li> */}
              
                <div className="menu-item divM">
                  <span className="hasCh">Services</span>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="./#design">Design</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#inspection-expediting">
                        Inspection and Expediting
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="./#welding">Welding</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#quality-support">Quality Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#oil-gas">Oil and Gas</a>
                    </li>
                  </ul>
                </div>
                <li className="menu-item">
                  <a href="./#contact">Contact Us</a>
                </li>
              </ul>
                </div>
              </div>{" "}
         

            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li className="menu-item">
                  <a href="./#home">Home</a>
                </li>
               
                <li className="menu-item">
                  <span className="serv">Services</span>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="./#design">Design</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#inspection-expediting">
                        Inspection and Expediting
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="./#welding">Welding</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#quality-support">Quality Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="./#oil-gas">Oil and Gas</a>
                    </li>
                  </ul>
                </li>
                 {/* <li className="menu-item">
                  <a href="./#about">Gallery</a>
                </li> */}
                <li className="menu-item">
                  <a href="./#contact">Contact Us</a>
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
