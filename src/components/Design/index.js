import React from "react";
import images from "config/images";

import "./style.css";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content design">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                DESIGN
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
          <div className="description__row">
            <p>
              Every design and engineering decision is considered against a
              number of variables: market & user insights, cost, 
              safety, quality, reliability, manufacturing and
              assembly. The knowledge of production are perfectly integrated into
              definition drawings so as to answer to customer requirements in a
              variety of areas including process engineering, piping layout,
              pipe stress analysis, mechanical design and civil and structural
              design engineering services.
              <p></p>Design office manages mechanical projects from the design
              phase up to the preparation of layouts, including feasibility
              study, functional specifications, functional analysis,
              specifications, nomenclatures, calculation notes, chain
              dimensioning & technical manuals. We provide robust detail
              mechanical engineering design solutions for the production,
              storage, transportation, and refinement segments.
            </p>
          </div>
          <div className="description__row">
            <div className="testimonial center">
              <h3>
                <strong>Scope of Services</strong>
              </h3>
              <p>
                We help clients by providing engineering design services &
                solutions across the oil and gas industry to innovate and adapt
                to challenging environments. We’ve developed our own proven,
                highly choreographed 360 degree approach to design & engineering
                that goes well beyond considering how a product should look and
                work.
              </p>
            </div>
          </div>
          <div className="description__row">
            <div className="description__row__col2">
              <img alt="" src={images.d1}></img>
              <h3>
                <strong>Design of Steel Structures</strong>
              </h3>
              <p>
              Provide trust about the quality of the design within highly proficient in the application 
              of the relevant standards.
              </p>
            </div>
            <div className="description__row__col2">
              <img alt="" src={images.d2}></img>
              <h3>
                <strong>
                  Design of Pipe Network for Gas City Distribution
                </strong>
              </h3>
              <p>
                The first step in any network process design is identifying the
                process goal and the technical options available to achieve it.
              </p>
            </div>
            <div className="description__row__col2">
              <img alt="" src={images.d3}></img>
              <h3>
                <strong>
                  Design of Pipeline for Transmission of Oil and Gas
                </strong>
              </h3>
              <p>
                The use front-end loading systems are designed to significantly
                improve process operations. Our outstanding point is experience
                and creativity.
              </p>
            </div>
            <div className="description__row__col2">
              <img alt="" src={images.d4}></img>
              <h3>
                <strong>Design of Oil Storage Tanks</strong>
              </h3>
              <p>
                Complex needs and challenges don’t stand in the way of our
                engineers and designers. We are getting ready to deal with these
                challenges.
              </p>
            </div>
            <div className="description__row__col2">
              <img alt="" src={images.d5}></img>
              <h3>
                <strong>Design of Tank Farms</strong>
              </h3>
              <p>
                Tank designs are based on various industry standards, including
                but not limited to: API-650 API-653 API-620
              </p>
            </div>
          </div>
          <div className="description__row">
            <p className="text-center">
              <i>
                » From the conceptual design to executing, COMPASS ENGINEERING
                provides unique solutions for various of steel structures,
                pipelines and storage tanks installation. Keeping customers’
                requirements in mind, we follow latest industry standards,
                regulations and cost effective solutions. «
              </i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
