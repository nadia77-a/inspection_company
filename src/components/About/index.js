import React from "react";

import "./style.css";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content quality">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                OUR OFFICE LOCATIONttt
                <div className="description">
                  COMPASS(formerly Socotec Oil&Gas) has 30 years experience
                  in developing Quality Management Systems. Already have a
                  Quality Management System in place? COMPASS(formerly
                  Socotec Oil&Gas) can provide in-depth Analysis to your current
                  QMS or your vendor's QMS and get you on track with the
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
              organization. COMPASS(formerly Socotec Oil&Gas) is dedicated to
              providing value-added resources no mater your requirements and
              expectations. COMPASS(formerly Socotec Oil&Gas) provides
              properly vetted, experienced and highly qualified technical
              auditors from an extensive global pool of talent and guarantees
              exceptional performance.
            </p>
            <p>
              Why do you need OUR OFFICE LOCATION? With growing changes to
              procedures and policies, compliance, conformance, and performance
              will not coincide with your QMS. Auditing of risk and performance,
              KPI’s and follow up on completed corrective actions serve as a
              major role in keeping quality programs, company policies, contract
              commitments and regulatory requirements achieved.
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
              <h3>
                <strong>COMPASSAuditors</strong>
              </h3>
              <p>
                During the COMPASS(formerly Socotec Oil&Gas) employment
                process all COMPASSauditors are vetted verifying competencies
                and qualifications as well as implementation of any additional
                training needed for continual improvement. Auditors are held to
                COMPASS standards while conducting your business, including
                reporting and HSE guidelines. During employment all auditors
                undergo regular on-site evaluations and mandatory training.
              </p>
            </div>
            <div className="description__row__col2">
              <img
                src="https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg"
                alt=""
              ></img>
            </div>
            <div className="description__row__col2">
              <h3>
                <strong>Reporting</strong>
              </h3>
              <p>
                COMPASS(formerly Socotec Oil&Gas) personnel are dedicated to
                providing the best possible service. A crucial element of this
                is the reporting process, which enables our clients to fully
                understand the overall status of their projects. Reports can be
                prepared on our own reporting format or client specific
                formatting if required. Training on proper report writing is
                mandatory with all COMPASSauditors to ensure sufficient
                information is captured and relayed back to our customers.
              </p>
            </div>
          </div>
          <div className="description__row">
            <p className="text-center">
              <i>
                » Having issues with your vendor? Need to audit a supplier prior
                to adding them to your approved vendor list? COMPASShas
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
