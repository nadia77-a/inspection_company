import React from "react";
import images from "config/images";
import "./style.css";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content welding">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                WELDING
                <div className="description">
                  Compass Engineering offers you unrivaled experience and
                  expertise in weld testing methods.
                  <br></br><br></br>Welding codes and standards address all aspects of
                  design and fabrication of welded components, including welding
                  procedure specifications, quality control and quality
                  assurance during welding and necessary welding skills for a
                  given welding procedure in all industry sectors. The relevant
                  code is often specified by the end user or client as a
                  contractual agreement in order to control the characteristics
                  of the welded components that may affect the service
                  requirements. Compliance to these welding codes is therefore a
                  must.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
              To ensure that you never miss a deadline due to testing delays,
              our team of experienced engineers provides fast turnarounds and
              unmatched quality control.
              <br></br><br></br>
              Our welding inspectors are aware of what codes or standards are
              applicable in a certain area and understand the requirements of
              the relevant document. We can perform various qualification and
              testing services in order to verify that the welder or welding
              operator is capable of making welds within the scope of that
              standard or that the instructions in the welding procedure
              specifications are accurate.
            </p>
          </div>
          
          <div className="description__row">
            <div className="description__row__col2">
              
              <h3>
                <strong>Welding Procedure (pWPS / WPS)</strong>
              </h3>
              <p>
                In order to achieve an accurate welding procedure specification,
                we help you to develop and assess welding procedures on a
                qualification weld.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Welding Qualification (WPQR)</strong>
              </h3>
              <p>
                The qualification weld is inspected by the mechanical and
                non-mechanical tests in preparation of the procedure
                qualification report (WPQR).
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Welder Qualification</strong>
              </h3>
              <p>
                Certified welders possess the skills necessary to produce a
                sound weld, which is visually acceptable and also meets testing
                requirements.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Welding Inspection</strong>
              </h3>
              <p>
                When welding quality is not managed and/or welding does not meet
                industry expectations, we assure you to avoid costly delays due
                to sub-standard welding procedures. We offer a full range of
                weld testing services, providing vital quality assurance.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Welding Supervision</strong>
              </h3>
              <p>
                Our experts support you with comprehensive engineering services
                that cover the full range of welding activities such as welding
                engineers on staff for consulting in design questions, procedure
                witnessing or failure analysis.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>NDT</strong>
              </h3>
              <p>
                With non-destructive weld testing from Compass, you assure the
                safety and integrity of your welds. All applicable standards are
                being met by inspecting the surface and the subsurface of your
                welds.
              </p>
            </div>
          </div>
          {/* <div className="description__row">
            <p className="text-center">
              <i>
                » The condition of an asset or component is crucial for a
manufacturer and an operator to ensure safety and integrity.
Therefore, our technicians provide you with state-of-theart solutions and deep engineering knowhow to gather and
evaluate the required data needed to assess the integrity of
your component and asset.  «
              </i>
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Quality;
