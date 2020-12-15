import React from "react";

import Header from "shared-components/Header";
import Footer from "shared-components/Footer";

import ManpowerComponent from "components/ManPower";

class ManpowerServices extends React.Component {
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
        <ManpowerComponent></ManpowerComponent>
        <Footer></Footer>
      </div>
    );
  }
}

export default ManpowerServices;
