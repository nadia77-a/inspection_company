import React from "react";

import "./style.css";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content quality">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="main-content__top__title centerContent">
              Quality Support
              <div className="description">
                INTERSICA (formerly Socotec Oil&Gas) has 30 years experience in
                developing Quality Management Systems. Already have a Quality
                Management System in place? INTERSICA (formerly Socotec Oil&Gas)
                can provide in-depth Analysis to your current QMS or your
                vendor's QMS and get you on track with the ever-growing and
                ever-changing standards. Our global network of personnel can
                ensure compliance with all requests and provide the highest
                standards of service.
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
              organization. INTERSICA (formerly Socotec Oil&Gas) is dedicated to
              providing value-added resources no mater your requirements and
              expectations. INTERSICA (formerly Socotec Oil&Gas) provides
              properly vetted, experienced and highly qualified technical
              auditors from an extensive global pool of talent and guarantees
              exceptional performance.
            </p>
            <p>
              Why do you need Quality Support? With growing changes to
              procedures and policies, compliance, conformance, and performance
              will not coincide with your QMS. Auditing of risk and performance,
              KPI’s and follow up on completed corrective actions serve as a
              major role in keeping quality programs, company policies, contract
              commitments and regulatory requirements achieved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
