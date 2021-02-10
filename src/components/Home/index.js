import React from "react";
import allImages from "config/images";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

class Home extends React.Component {
  render() {
    const zoomOutProperties = {
      indicators: true,
      transitionDuration: 500,
    };

    const services = [
      {
        id: 1,
        name: "Design",
        subC:['a.	Design of Steel Structures',"b.	Design of Pipe Network for Gas City Distribution","c.	Design of Pipeline for Transmission of Oil and Gas","d.	Design of Oil Storage Tanks","e.	Design of Tank Farms"],
        link: "/quality-support",
        img: "https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg",
      },
      {
        id: 2,
        name: "Expediting Services",
        subC:['a.	Project Full-Time Monitoring',"b.	Vendor Specific Expediting","c.	Quality Audits","d.	Progress reporting","e.	Desk expediting","f.	Supplier Capability Surveys","g.	Verifications of deadlines and delays"],
        link: "/quality-support",
        img:
          "https://intersica.com/wp-content/uploads/2019/07/inspector-phone-1.jpg",
      },
      {
        id: 3,
        name: "Welding",
        subC:['ta.	Welding Procedure (pWPS / WPS)',"b.	Welding Qualification (WPQR)","c.	Welder Qualification","d.	Welding Inspection","e.	Welding Supervision","f.	NDT (PT/RT/UT/VT/MT)"],
        link: "/quality-support",
        img: "https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg",
      },
      {
        id: 4,
        name: "Quality Support (QA&QC)",
        subC:['a.	Site Supervision',"b.	Visual, dimensional and quantity control of goods/commodities","c.	Inspection of all stages of manufacturing activities (initial visits, in progress and final inspections)","d.	Supervision of mechanical test, hydrostatic test, pneumatic test, leakage test","e.	Incoming Goods Inspection","f.	Coating Application","g.	Ensure compliance with related standards and requirements"],
        link: "/quality-support",
        img:
          "https://intersica.com/wp-content/uploads/2019/07/inspector-phone-1.jpg",
      },
      {
        id: 5,
        name: "Oil and Gas",
        subC:['a.	Design according to API 650 standard',"b.	API 653 Inspection","c.	API 510 Inspection","d.	API 570 Inspection","e.	Supervision, testing and commissioning of Oil and Gas installations"],
        link: "/quality-support",
        img: "https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg",
      },
    ];

    return (
      <React.Fragment>
        <Fade {...zoomOutProperties} easing="cubic" className="carousel">
          <div className="each-slide">
            <div>
              <img src={allImages.img1} style={{ width: `100%` }} alt=""></img>
              <span>Your Global Quality Service Company</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={allImages.img2} style={{ width: `100%` }} alt=""></img>
              <span>
                We provide Technical Assistance and Source Inspection Services
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={allImages.img1} style={{ width: `100%` }} alt=""></img>
              <span>Your Global Quality Service Company</span>
            </div>
          </div>
        </Fade>
        <div className="section_descr">
          <div className="description max_container">
            <div className="title">The Core of Compass Engineering</div>
            <p>
            Compass Engineering is an independent technical service company that has expert knowledge and experience in the area of engineering consulting, tank farm design, NDT, WPS - WPQR - Welder Qualification, integrity evaluation, procurement, 3rd party manufacturing inspections, supplier quality surveillance (SQS), by serving oil & gas companies, installation contractors, manufacturers and suppliers. 
            </p>
            <p>
            Capability of delivering highly qualified expertise with the intention of exceeding our clients’ expectations for safety, quality, functionality and deliver services that stand the test of time.
            </p>
            <p>
                          </p>
            
          </div>
        </div>
        <div className="section_services home_section">
          <div className="services first_section max_container">
            <div className="title">Our Services</div>
            <div className="divider">
              <div className="divider_section"></div>
            </div>
            <div className="all_services">
              {services.map((service, id) => {
                return (
                  <div className="single_service" key={id}>
                    <div className="single_service_image">
                      <a href="/quality-support">
                        <span className="single_service_image_wrap et-animated et_had_animation">
                          <img
                            src="https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg"
                            alt=""
                            className="et-animated"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="single_service_container">
                      <a href={service.link}>{service.name}</a>
                      <ul>{
                        service.subC?.map((sub,i)=>{
                          return <li key={i}>{sub}</li>
                        })
                        }</ul>

                                          </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="section_services offices_section">
          <div className="services max_container">
            <div className="title">Our Offices</div>
            <div className="divider">
              <div className="divider_section"></div>
            </div>
            <div className="all_services">
              <div className="map_col">
                <img
                  src="https://intersica.com/wp-content/uploads/2019/07/iStock-522534470-C-from2015-.jpg"
                  alt=""
                />
              </div>
              <div className="contact_col">
                <div className="contactCol__us">
                  <div className="title">Contact us</div>
                  <div className="go">More</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
      </React.Fragment>
    );
  }
}

export default Home;
