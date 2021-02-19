import React from "react";

import "./style.css";
import images from "config/images";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content quality">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                QUALITY SUPPORT (QA & QC)
                <div className="description">
                Regardless of the size and type of your organization, a quality support system is an important way to 
                demonstrate the coherence of your company’s processes. Increase the confidence of your customers by operating an 
                 excellent and  active quality. Our inspection and supervision 
                services will help you improve your company’s performance with the aid of a quality support.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
            Benefit from our long-standing experience in quality suport and service quality. We are a recognized service provider and our experts are always up-to-date on the latest regulatory updates and requirements relevant to your quality systems.
            </p>
          </div>
          <div className="description__row">
            <div className="testimonial center">
              <h3>
                <strong>Scope of Services</strong>
              </h3>
              <p>
              When it comes to your industrial facilities, the quality of all equipment, materials, structures and components is subject to strict regulations and standards. Our quality assurance and quality control services help you ensure compliance with all contractual specifications, mandatory regulations and quality standards.
              </p>
            </div>
          </div>
          <div className="description__row">
            <div className="description__row__col2">
              <img src={images.q1}></img>
              <h3>
                <strong>Site Supervision</strong>
              </h3>
              <p>
              Ensure an effective and timely assurance and control of the quality of the executed project phases.
              </p>
            </div>
            <div className="description__row__col2">
              <img src={images.q2}></img>
              <h3>
                <strong>
                  Visual, Dimensional and Quantity Control of Goods/Commodities
                </strong>
              </h3>
              <p>
              Our visual inspection service provides quality checking and control of your delivered goods to 
              help you avoid delays and stick to project schedule.
              </p>
            </div>
            <div className="description__row__col2">
              <img src={images.q3}></img>
              <h3>
                <strong>
                  Inspection of all stages of manufacturing activities (initial
                  visits, in progress and final inspections)
                </strong>
              </h3>
              <p>
                COMPASS personnel are dedicated to providing the best possible
                service. A crucial element of this is the reporting process.
              </p>
            </div>
            <div className="description__row__col2">
              <img src={images.q4}></img>
              <h3>
                <strong>
                  Supervision of Mechanical Test, Hydrostatic Test, Pneumatic
                  Test, Leakage Test
                </strong>
              </h3>
              <p>
                COMPASS(formerly Socotec Oil&Gas) personnel are dedicated to
                providing the best possible service. A crucial element of this
                is the reporting process.
              </p>
            </div>
            <div className="description__row__col2">
              <img src={images.q5}></img>
              <h3>
                <strong>Incoming Goods Inspection</strong>
              </h3>
              <p>
                COMPASS) personnel are dedicated to providing the best possible
                service. A crucial element of this is the reporting process..
              </p>
            </div>
            <div className="description__row__col2">
              <img src={images.q6}></img>
              <h3>
                <strong>Coating Application</strong>
              </h3>
              <p>
                COMPASS personnel are dedicated to providing the best possible
                service. A crucial element of this is the reporting process.
              </p>
            </div>
            <div className="description__row__col2">
            <img src={images.q7}></img>
              <h3>
                <strong>
                  Ensure Compliance With Related Standards and Requirements
                </strong>
              </h3>
              <p>
                COMPASS personnel are dedicated to providing the best possible
                service. A crucial element of this is the reporting process.
              </p>
            </div>
          </div>
          <div className="description__row">
            <p className="text-center">
              <i>
                » Having issues with your vendor? Need to audit a supplier prior
                to adding them to your approved vendor list? COMPASS has
                certified auditors with the knowledge and experience to perform
                audits on your suppliers to ensure that they meet or exceed your
                requirements. «
              </i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
