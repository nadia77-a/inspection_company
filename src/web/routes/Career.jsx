import React from "react";

import Header from "shared-components/Header";
import Footer from "shared-components/Footer";

import CareerComponent from "components/Career";

class Career extends React.Component {
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
        className={"career mainC" + (this.state.top === true ? " fixedH" : "")}
      >
        <Header></Header>
        <CareerComponent></CareerComponent>
        <Footer></Footer>
      </div>
    );
  }
}

export default Career;
