import React from "react";

import "./style.css";

import images from "config/images";

class ManPower extends React.Component {
  render() {
    return (
      <div className="main-content manPower">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                INSPECTION AND EXPEDITING SERVICES
                <div className="description">
                  Realizing a successful project, you can easily reach our
                  experts by your side, achieve expediting goals and meet
                  deadlines.
                  <p></p>COMPASS ENGINEERING ensures the project on time
                  schedule, the expediting services are even more strategic, by
                  inspecting/checking suppliers progress and reporting on real
                  time situations and decisions taken to meet the schedule.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
              <p>
                <b>Your delivery schedules are secured with our expediting services</b>
              </p>
              As manufacturing and supply chain processes become more complex
              and competitive, procurement, management and coordination of
              international projects prove to be increasingly challenging. Our
              expediting service adds value to your projects through the
              inspection of manufacturers and assessment of manufacturing
              production plans and capacity.
              <p></p>Our comprehensive expediting services help you to avoid
              delays and ensure compliance with contractual conditions and
              specifications as well as applicable international codes and
              standards.
              <p></p>
              <p></p>
              <p>
                <b>What do you need to reach project milestones and asserting
                reliability?</b>
              </p>
              Our experts actively keep an eye on the deadlines and
              manufacturing schedule to help you reach defined project
              milestones and ensure that equipment, materials and components
              arrive at the right place, at the right time. We also help you
              prevent long capital stock and safeguard company reliability and
              integrity.
            </p>
          </div>
          <div className="description__row">
            <div className="testimonial center">
              <h3>
                <strong>Scope of Services</strong>
              </h3>

              <p>
                {" "}
                Our full range of expediting services help you ensure that final
                delivery is made on time not limeted to responsible development,
                through safe and remote site monitoring for legal, economic,
                safety and environmental (HSE) purposes.
              </p>
            </div>
          </div>
          <div className="flex description__row">
            <div className="description__row__col1">
              <img src={images.i1}></img>
              <h3>
                <strong>Project Full-Time Monitoring</strong>
              </h3>
              <p>
                Comprehensive support along the entire supply chain, including
                follow up on major project milestones and deadlines.
              </p>
            </div>
            <div className="description__row__col1">
              <img src={images.i4}></img>
              <h3>
                <strong>Supplier Capability Surveys</strong>
              </h3>
              <p>
                Mobilize experienced quality assurance engineers to a
                manufacturer’s site for conducting a thorough assessment
                production progress, manufacturing schedule, supplier workload,
                and identifying areas of concern.
              </p>
            </div>
            <div className="description__row__col1">
              <img src={images.i5}></img>
              <h3>
                <strong>Verifications of Deadlines and Delays</strong>
              </h3>
              <p>
                Evaluate the status of a supply and foresee the most feasible
                delivery dates according to the production situation.
              </p>
            </div>
            <div className="description__row__col1">
              <img src={images.i2}></img>
              <h3>
                <strong>Quality Audits</strong>
              </h3>
              <p>
                Evaluation of supplier production potential and quality before
                an order is placed.
              </p>
            </div>
            <div className="description__row__col1">
              <img src={images.i3}></img>
              <h3>
                <strong>Vendor Specific Expediting</strong>
              </h3>
              <p>
                Fully investigate all specific aspects of vendor scheduling to
                ensure they meet their contractual obligations and deliver on
                time.
              </p>
            </div>
            
      
            <div className="description__row__col1">
              <img src={images.i6}></img>
              <h3>
                <strong>Progress Reporting</strong>
              </h3>
              <p>
                Verification of contractual conditions and actual project
                status.
              </p>
            </div>

            <div className="description__row__col1">
              <img src={images.i7}></img>
              <h3>
                <strong>Desk expediting</strong>
              </h3>
              <p>
                Offsite monitoring of order progress at specific milestone
                points.
              </p>
            </div>
          </div>
          <div className="description__row">
            <p className="text-center">
              <i>
                » With numerous suppliers involved in your supply chain, keeping
                your projects on schedule is a challenge. Our expediting
                services keep your project firmly on schedule by ensuring that
                your suppliers deliver. «
              </i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ManPower;
