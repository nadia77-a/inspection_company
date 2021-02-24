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
                OUR PROJECTS
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
            <li data-tab-target="#Steel Structures" class={`tab `+ (isActive==="Steel Structures" ? "active":"")} onClick={()=>this.setState({isActive:"Steel Structures"})}>
            Steel Structures
            </li>
            <li data-tab-target="#Pipelines" class={`tab `+ (isActive==="Pipelines" ? "active":"")} onClick={()=>this.setState({isActive:"Pipelines"})}>
            Pipelines
            </li>
            <li data-tab-target="#Oil Storage Tanks" class={`tab `+ (isActive==="Oil Storage Tanks" ? "active":"")} onClick={()=>this.setState({isActive:"Oil Storage Tanks"})}>
            Oil Storage Tanks
            </li>
            <li data-tab-target="#Tank Farms" class={`tab `+ (isActive==="Tank Farms" ? "active":"")} onClick={()=>this.setState({isActive:"Tank Farms"})}>
            Tank Farms
            </li>
            <li data-tab-target="#Tank Farms" class={`tab `+ (isActive==="Tank Farms" ? "active":"")} onClick={()=>this.setState({isActive:"Tank Farms"})}>
            Tank Farms
            </li>
            
          </ul>

          <div class="tab-content">
            <div id="Steel Structures" data-tab-content class={(isActive==="Steel Structures" ? "active":"")} onClick={()=>this.setState({isActive:"Steel Structurese"})}>
              <h1>Steel Structures</h1>
              <p>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800004/43701616-abstract-3d-rendering-of-low-poly-structure-sci-fi-background-with-wireframe-and-particles-in-empty-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
              </p>
            </div>
            <div id="Pipelines" data-tab-content  class={(isActive==="Pipelines" ? "active":"")} onClick={()=>this.setState({isActive:"Pipelines"})}>
              <h1>Pipelines</h1>
              <p>
              <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
              </p>
            </div>
            <div id="Oil Storage Tanks" data-tab-content class={(isActive==="Oil Storage Tanks" ? "active":"")} onClick={()=>this.setState({isActive:"Oil Storage Tanks"})}>
              <h1>Oil Storage Tanks</h1>
              <p>
              <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
              </p>
            </div>
            <div id="Tank Farms" data-tab-content class={(isActive==="Tank Farms" ? "active":"")} onClick={()=>this.setState({isActive:"Tank Farms"})}>
              <h1>Tank Farms</h1>
              <p>
               <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131508/valex113150800008/43701758-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131509/valex113150900045/45274329-abstract-3d-rendering-of-black-surface-background-with-futuristic-polygonal-shape-.jpg?ver=6"></img>
                <img src="https://us.123rf.com/450wm/valex113/valex1131507/valex113150700050/43130817-abstract-3d-rendering-of-black-surface-background-with-futuristic-low-poly-shape-.jpg?ver=6"></img>
              </p>
            </div>
            
                      </div>
        </div>
      </div>
    );
  }
}

export default Quality;
