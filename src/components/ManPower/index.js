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
                  Compass Engineering is a well known company in inspection and expediting services.
                With our experts you can easily achieve expediting goals and meet
                  deadlines.
                  <br></br><br></br>
                  Ensuring the project on time
                  schedule, the expediting services are even more strategic, by
                  inspecting/monitoring suppliers progress and reporting on real
                  time situations and decisions taken to meet the schedule.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
                <b><li>Your delivery schedules are met with our expediting services</li></b>
              Our expediting service adds value to your projects through the
              inspection of manufacturers and assessment of manufacturing
              production plans and capacity.
              <br></br><br></br>
              We help you to avoid
              delays and ensure compliance with contractual conditions and
              specifications on applicable international codes and
              standards.
                       
                              
              Our experts actively keep an eye on the deadlines and
              manufacturing schedule to help you reaching project objectives
              and ensure that equipment, materials and components
              arrive at the right place, at the right time. 
            </p>
          </div>
          
          <div className="flex description__row">
            <div className="description__row__col1">
              
              <h3>
                <strong>Project Full-Time Monitoring</strong>
              </h3>
              <p>
                Comprehensive support along the entire supply chain, including
                follow up on major project milestones and deadlines.
              </p>
            </div>
            <div className="description__row__col1">
              
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
              
              <h3>
                <strong>Verifications of Deadlines and Delays</strong>
              </h3>
              <p>
                Evaluate the status of a supply and foresee the most feasible
                delivery dates according to the production situation.
              </p>
            </div>
            <div className="description__row__col1">
              
              <h3>
                <strong>Quality Audits</strong>
              </h3>
              <p>
                Evaluation of supplier production potential and quality before
                an order is placed.
              </p>
            </div>
            <div className="description__row__col1">
              
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
              
              <h3>
                <strong>Progress Reporting</strong>
              </h3>
              <p>
                Verification of contractual conditions and actual project
                status.
              </p>
            </div>

            <div className="description__row__col1">
             
              <h3>
                <strong>Desk Expediting</strong>
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
