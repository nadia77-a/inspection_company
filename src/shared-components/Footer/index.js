import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
        <div id="footer-bottom">
          <div className="container clearfix">
            <div id="footer-info">
              © COMPASS ENGINEERING 2021 - All right reserved {" "}
              {" "}
              
            </div>{" "}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
