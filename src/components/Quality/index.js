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
                  COMPASS has 30 years experience in developing Quality
                  Management Systems. Already have a Quality Management System
                  in place? COMPASS can provide in-depth Analysis to your
                  current QMS or your vendor's QMS and get you on track with the
                  ever-growing and ever-changing standards. Our global network
                  of personnel can ensure compliance with all requests and
                  provide the highest standards of service.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
              A quality management system (QMS) is a set of policies, processes
              and procedures required for planning and execution (production/
              development/ service) in the core business area of an
              organization. COMPASS is dedicated to providing value-added
              resources no mater your requirements and expectations. COMPASS
              provides properly vetted, experienced and highly qualified
              technical auditors from an extensive global pool of talent and
              guarantees exceptional performance.
            </p>
          </div>
          <div className="description__row">
            <div className="testimonial center">
              <h3>
                <strong>Services</strong>
              </h3>
              <p>
                • Strategic Planning • Management Review • Controlled Document
                System Verification • Data Collection Control • Corrective and
                Preventative Action Monitoring • Risk Assessment Analysis •
                Continual Improvement Process
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
                During the COMPASS(formerly Socotec Oil&Gas) employment process
                all COMPASSauditors are vetted verifying competencies and
                qualifications.
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
                During the COMPASS(formerly Socotec Oil&Gas) employment process
                all COMPASSauditors are vetted verifying competencies and
                qualifications.
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
