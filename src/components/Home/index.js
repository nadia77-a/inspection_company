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
        name: "Quality Support",
        link: "/quality-support",
        img: "https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg",
      },
      {
        id: 2,
        name: "Expediting Services",
        link: "/quality-support",
        img:
          "https://intersica.com/wp-content/uploads/2019/07/inspector-phone-1.jpg",
      },
      {
        id: 3,
        name: "Vendor Inspection",
        link: "/quality-support",
        img: "https://intersica.com/wp-content/uploads/2019/07/inspectors.jpg",
      },
      {
        id: 4,
        name: "Manpower Services",
        link: "/quality-support",
        img:
          "https://intersica.com/wp-content/uploads/2019/07/inspector-phone-1.jpg",
      },
      {
        id: 5,
        name: "Pipe Mill Surveillance",
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
            <div className="title">Whenever Quality Matters</div>
            <p>
              INTERSICA (formerly Socotec Oil & Gas) belongs to the INTERHOLDING
              Group, providing services to improve the performance of Businesses
              and Local Authorities through Risk Management. It provides
              assistance to customers worldwide, throughout the lifecycles of
              their projects, in the area of Quality, Health, Safety and
              Environment.
            </p>
            <p>
              We have developed a strong expertise and recognized competences in
              a wide range of Oil & Gas equipment (OCTG, Line Pipe, Riser,
              Umbilical, Wellheads, Subsea Equipment Down hole Equipment,
              Pressure Vessels, Valves, Piping & Fittings, Rotating & Electrical
              Equipment and Structures).
            </p>
            <p>
              We provide a solid Technical Assistance and Source Inspection
              history and offer a Worldwide Coverage with many local Inspectors.
              Our employees have Strong Project Experience from Management to
              Inspection. Dedicated to our Customers, we offer Tailored
              Solutions and Custom Reporting.
            </p>
            <p>
              INTERSICA (formerly Socotec Oil & Gas) is ISO 9001 and OHSAS
              18001. Our goal is to become your preferred Global Quality Service
              Partner.
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
                      <a href="https://intersica.com/quality-support/">
                        <span className="single_service_image_wrap">
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

                      <a className="learn_more" href={service.link}>
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section_services offices_section">
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
        </div>
        <div className="section_services accreditations_section">
          <div className="services max_container">
            <div className="title">Our Accreditations</div>
            <div className="divider">
              <div className="divider_section"></div>
            </div>
            <div className="accredit_list">
              <div className="accredit_list__item">
                <img
                  src="https://intersica.com/wp-content/uploads/2019/07/iso-transp.png"
                  alt=""
                ></img>
              </div>
              <div className="accredit_list__item">
                <img
                  src="https://intersica.com/wp-content/uploads/2019/07/FPAL.gif"
                  alt=""
                ></img>
              </div>
              <div className="accredit_list__item">
                <img
                  src="https://intersica.com/wp-content/uploads/2019/07/ohsas-18001.png"
                  alt=""
                ></img>
              </div>
              <div className="accredit_list__item">
                <img
                  src="https://intersica.com/wp-content/uploads/2019/07/iso-9001.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
