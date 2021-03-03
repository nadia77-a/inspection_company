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
            Benefit from our experience in quality support and service quality. 
            We are are always up-to-date on the latest 
            regulatory updates and requirements relevant to your quality systems.
            Our inspection and supervision services will help you improve your company’s 
            performance permanently with the aid of a quality support.
            </p>
          </div>
                    <div className="description__row">
            <div className="description__row__col2">
              
              <h3>
                <strong>Site Supervision</strong>
              </h3>
              <p>
              Ensure an effective and timely assurance and control of the quality of the executed project phases.
              </p>
            </div>
            <div className="description__row__col2">
              
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
              
              <h3>
                <strong>
                  Inspection of all stages of manufacturing activities (initial
                  visits, in progress and final inspections)
                </strong>
              </h3>
              <p>
              Ensure consistency best quality by our qualified personnel, progress and right equipment in place for every stage of 
              your manufacturing process.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>
                  Supervision of Mechanical Test, Hydrostatic Test, Pneumatic
                  Test, Leakage Test
                </strong>
              </h3>
              <p>
              Review the test specifications and procedures and ensure that all equipment are adequate and duties 
are organized and understood. Use of safety barriers for protection from variety of tests is the key to minimize
potential hazards. 
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Incoming Goods Inspection</strong>
              </h3>
              <p>
              Only an inspection based on sophisticated inspection plans provides certainty about the quality of the goods and minimizes the risk of a defective delivery or complaint. 
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>Coating Application</strong>
              </h3>
              <p>
              Our surface coating testing can help you avoid failures by making the right choice and to ensure your coating applications provide the performance you need.
              </p>
            </div>
            <div className="description__row__col2">
            
              <h3>
                <strong>
                  Ensure Compliance With Related Standards and Requirements
                </strong>
              </h3>
              <p>
              Understanding your
business's responsibilities, then putting the right policies and procedures
in place, is an essential first step towards keeping your business compliant.

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
