import React from "react";

import "./style.css";
import images from "config/images";

class Quality extends React.Component {
  render() {
    return (
      <div className="main-content oilGas">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                OIL AND GAS
                <div className="description">
                                Whether you are involved in exploring, extracting, refining, transporting or marketing oil and gas. 
                Compass Engineering offers a comprehensive range of services to support and optimize your business. With the recent volatility and 
                record-breaking 
                prices for these resources, it is vital that you get the most from 
                every part of the production and value adding chain – and optimize the efficiency of your own processes.
                <br></br>
                We help you understand the condition of your components and assets, avoid incidents and ensure that you meet the
                 latest regulatory and individual
                 requirements from the design, construction and operation phases.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
            Partner with COMPASS for
support with distribution and retail,
including calibration services,
facility audits, leak detection, and maintenance. As the field of oil and
gas logistics can be so complex, we have a large global team of
experts to help you get your
products to wherever you need
them, safely, securely and in
compliance with national and
international standards. We assist
in the design and execution to support the oil, gas and petrochemical industry in ensuring safety, reliability and 
regulatory compliance of your components and assets throughout their life-cycle
with independent inspection, testing and certification services.
             
            </p>
          </div>
                    <div className="description__row">
            <div className="description__row__col2">
              
              <h3>
                <strong>Design according to API 650 standard</strong>
              </h3>
              <p>
              This standard establishes minimum requirements for the design, fabrication, erection, and inspection of welded storage tanks.
              All design aspects are involved to ensure the safety, sustainability, and environmental performance.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>API 653 Inspection</strong>
              </h3>
              <p>
              Reduce the very serious risks of the leakage of hazardous chemicals during storage and of damaging corrosion weakening tanks, 
              shell distortions,corrosion, verification of the foundation condition, paint coating, insulation system and appurtenances. 
              Each element which can cause catastrophic environmental disaster and exorbitant financial losses.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>API 510 Inspection</strong>
              </h3>
              <p>
              This inspection code covers the in-service inspection,
repair, alteration, and rerating activities for pressure
vessels and the pressure-relieving devices protecting
these vessels. 
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>API 570 Inspection</strong>
              </h3>
              <p>
              API 570 covers inspection, rating, repair, and alteration procedures for metallic and
               fiberglass-reinforced plastic (FRP) piping systems and their associated pressure relieving devices that have been placed in service.
              This inspection Code applies to all hydrocarbon and chemical process.
              </p>
            </div>
            <div className="description__row__col2">
              
              <h3>
                <strong>
                  Supervision, Testing and Commissioning of Oil and Gas
                  installations
                </strong>
              </h3>
              <p>
              We assure that all systems and components are designed, installed, tested, 
              operated and maintained according to your requirements.
              </p>
            </div>
          </div>
          {/* <div className="description__row">
            <p className="text-center">
              <i>
                » Due
to the potential danger and risk associated with pressure
equipment, both manufacturers and operators have to
comply with national and international regulations.
Our local experts and their expertise help you ensure
the regulatory compliance of your pressure equipment,
wherever you are.«
              </i>
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Quality;
