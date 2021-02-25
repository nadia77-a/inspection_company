import React from "react";

import "./style.css";
import images from "config/images";

class Quality extends React.Component {
  state = {
    isActive: "Design",
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className="main-content projects">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                OUR PROJECTS
                <div className="description">
                  Compass Engineering provides engineering design, on-site
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
            <li
              data-tab-target="#Design"
              class={`tab ` + (isActive === "Design" ? "active" : "")}
              onClick={() => this.setState({ isActive: "Design" })}
            >
              Design
            </li>
            <li
              data-tab-target="#Inspection and Expediting"
              class={`tab ` + (isActive === "Inspection and Expediting" ? "active" : "")}
              onClick={() => this.setState({ isActive: "Inspection and Expediting" })}
            >
              Inspection and Expediting
            </li>
            <li
              data-tab-target="#Welding"
              class={
                `tab ` + (isActive === "Welding" ? "active" : "")
              }
              onClick={() => this.setState({ isActive: "Welding" })}
            >
              Welding
            </li>
            <li
              data-tab-target="#Quality Support"
              class={`tab ` + (isActive === "Quality Support" ? "active" : "")}
              onClick={() => this.setState({ isActive: "Quality Support" })}
            >
              Quality Support
            </li>
            <li
              data-tab-target="#Oil and Gas"
              class={`tab ` + (isActive === "Oil and Gas" ? "active" : "")}
              onClick={() => this.setState({ isActive: "Oil and Gas" })}
            >
              Oil and Gas
            </li>
          </ul>

          <div class="tab-content">
            <div
              id="Design"
              data-tab-content
              class={isActive === "Design" ? "active" : ""}
              onClick={() => this.setState({ isActive: "Design" })}
            >
              {/* <h1>Design</h1> */}
              <p>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800004/43701616-abstract-3d-rendering-of-low-poly-structure-sci-fi-background-with-wireframe-and-particles-in-empty-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
              </p>
            </div>
            <div
              id="Inspection and Expediting"
              data-tab-content
              class={isActive === "Inspection and Expediting" ? "active" : ""}
              onClick={() => this.setState({ isActive: "Inspection and Expediting" })}
            >
              {/* <h1>Inspection and Expediting</h1> */}
              <p>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
              </p>
            </div>
            <div
              id="Welding"
              data-tab-content
              class={isActive === "Welding" ? "active" : ""}
              onClick={() => this.setState({ isActive: "Welding" })}
            >
              {/* <h1>Welding</h1> */}
              <p>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
              </p>
            </div>
            
            <div
              id="Quality Support"
              data-tab-content
              class={isActive === "Quality Support" ? "active" : ""}
              onClick={() => this.setState({ isActive: "Quality Support" })}
            >
              {/* <h1>Quality Support</h1> */}
              <p>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
              </p>
            </div>
            
            <div
              id="Oil and Gas"
              data-tab-content
              class={isActive === "Oil and Gas" ? "active" : ""}
              onClick={() => this.setState({ isActive: "Oil and Gas" })}
            >
              {/* <h1>Quality Support</h1> */}
              <p>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"
                ></img>
                <img
                  alt=""
                  src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"
                ></img>
              </p>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
