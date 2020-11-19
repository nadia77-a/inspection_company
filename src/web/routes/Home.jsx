import React from "react";
// import Login from "./Login";
import allImages from "config/images";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

class Home extends React.Component {
  render() {
    const slideImages = [
      `../../assets/images/img2.jpg`,
      `../../assets/images/img2.jpg`,
      "assets/images/img1.jpg",
      "assets/images/img2.jpg",
    ];
    const zoomOutProperties = {
      indicators: true,
      transitionDuration: 500,
    };
    return (
      <div>
        Home
        {/* <img src={allImages.img1} className="imgUpload" alt=""></img> */}
        {/* <Login></Login> */}
        <Fade {...zoomOutProperties} easing="cubic">
          <div className="each-slide">
            <div
            // style={{
            //   backgroundImage: `url(${allImages.img1})`,
            // }}
            >
              <img src={allImages.img1} style={{ width: `100%` }}></img>
              <span>Your Global Quality Service Company</span>
            </div>
          </div>
          <div className="each-slide">
            <div
            // style={{
            //   backgroundImage: `url(${allImages.img2})`,
            // }}
            >
              <img src={allImages.img2} style={{ width: `100%` }}></img>
              <span>
                We provide Technical Assistance and Source Inspection Services
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
            // style={{
            //   backgroundImage: `url(${allImages.img1})`,
            // }}
            >
              <img src={allImages.img1} style={{ width: `100%` }}></img>
              <span>Your Global Quality Service Company</span>
            </div>
          </div>
        </Fade>
        <div className="section_descr">
          <div className="description">
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
        <div className="section_services">
          <div className="services">
            <div className="title">Our Services</div>
            <div className="all_services">
              <div className="single_service">
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
                  <h4 className="et_pb_module_header">
                    <a href="https://intersica.com/quality-support/">
                      Quality Support
                    </a>
                  </h4>
                  <div className="et_pb_blurb_description">
                    <a
                      className="et_pb_button"
                      href="https://intersica.com/quality-support/"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="single_service">
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
                  <h4 className="et_pb_module_header">
                    <a href="https://intersica.com/quality-support/">
                      Quality Support
                    </a>
                  </h4>
                  <div className="et_pb_blurb_description">
                    <a
                      className="et_pb_button"
                      href="https://intersica.com/quality-support/"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
