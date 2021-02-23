import React from "react";

import "./style.css";
import images from "config/images";

class Quality extends React.Component {
state ={
  isActive:"home"
}

  render() {
    const {isActive}=this.state;
    return (
      <div className="main-content projects">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                DESIGN
                <div className="description">
                  COMPASS ENGINEERING provides engineering design, on-site
                  services to the oil & gas processing and petrochemical
                  sectors. Our team of professionals have direct industry
                  experience that adds significant value at each project stage.
                  We are uniquely suited to provide responsive support.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <ul class="tabs">
            <li data-tab-target="#home" class={`tab `+ (isActive==="home" ? "active":"")} onClick={()=>this.setState({isActive:"home"})}>
              Home
            </li>
            <li data-tab-target="#pricing" class={`tab `+ (isActive==="pricing" ? "active":"")} onClick={()=>this.setState({isActive:"pricing"})}>
              Pricing
            </li>
            <li data-tab-target="#about" class={`tab `+ (isActive==="about" ? "active":"")} onClick={()=>this.setState({isActive:"about"})}>
              About
            </li>
            <li data-tab-target="#news" class={`tab `+ (isActive==="news" ? "active":"")} onClick={()=>this.setState({isActive:"news"})}>
              News
            </li>
          </ul>

          <div class="tab-content">
            <div id="home" data-tab-content class={(isActive==="home" ? "active":"")} onClick={()=>this.setState({isActive:"home"})}>
              <h1>Home</h1>
              <p>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
              </p>
            </div>
            <div id="pricing" data-tab-content  class={(isActive==="pricing" ? "active":"")} onClick={()=>this.setState({isActive:"pricing"})}>
              <h1>Pricing</h1>
              <p>
              <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
              </p>
            </div>
            <div id="about" data-tab-content class={(isActive==="about" ? "active":"")} onClick={()=>this.setState({isActive:"about"})}>
              <h1>About</h1>
              <p>
              <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
              </p>
            </div>
            <div id="news" data-tab-content class={(isActive==="news" ? "active":"")} onClick={()=>this.setState({isActive:"news"})}>
              <h1>News</h1>
              <p>
               <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
