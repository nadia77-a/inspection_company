import React from "react";

import Header from "shared-components/Header";
import Footer from "shared-components/Footer";

import "react-slideshow-image/dist/styles.css";

import AboutComponent from "components/About";

class Home extends React.Component {
  state = {
    top: false,
  };

  componentDidMount() {
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
  render() {
    return (
      <div
        className={"about mainC" + (this.state.top === true ? " fixedH" : "")}
      >
        <Header></Header>
        <AboutComponent></AboutComponent>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
