import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
        <div id="footer-bottom">
          <div className="container clearfix">
            <div id="footer-info">
              © Intersica 2019 - All right reserved -{" "}
              <a href="/legal-notice/">Legal notice</a> | une réalisation{" "}
              <a href="https://acs-informatique.com">ACS Informatique</a>
            </div>{" "}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
