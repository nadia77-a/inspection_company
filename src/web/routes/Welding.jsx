import React from "react";

import Header from "shared-components/Header";
import Footer from "shared-components/Footer";

import QualityComponent from "components/Welding/index.js";

class Welding extends React.Component {
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
        className={"contact mainC" + (this.state.top === true ? " fixedH" : "")}
      >
        <Header></Header>
        <QualityComponent></QualityComponent>
        <Footer></Footer>
      </div>
    );
  }
}

export default Welding;
