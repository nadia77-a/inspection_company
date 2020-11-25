import React from "react";

import "react-slideshow-image/dist/styles.css";
import "./style.css";

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="main-content__top__title centerContent">
              About INTERSICA
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <div className="description__row">
            <p>
              INTERSICA ( formerly Socotec Oil & Gas) belongs to the
              INTERHOLDING Group, providing services to improve the performance
              of Businesses and Local Authorities through Risk Management. It
              provides assistance to customers worldwide, throughout the
              lifecycles of their projects, in the area of Quality, Health,
              Safety and Environment.
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
          </div>
          <div className="description__row">
            <div className="description__row__col">
              <p>
                INTERSICA ( formerly Socotec Oil & Gas) has developed a strong
                expertise and recognized competences in a wide range of Oil &
                Gas equipment (OCTG, Line Pipe, Riser, Umbilical, Wellheads,
                Subsea Equipment Down hole Equipment, Pressure Vessels, Valves,
                Piping & Fittings, Rotating & Electrical Equipment and
                Structures).
              </p>
            </div>
            <div className="description__row__col">
              <img
                src="https://intersica.com/wp-content/uploads/2019/07/iStock-636032898-C-nielubieklonu-.jpg"
                alt=""
              />
            </div>
            <div className="description__row__col">
              <p>
                INTERSICA (formerly Socotec Oil & Gas) provides you with a solid
                Technical Assistance and Third Party Inspection history and
                offers a Worldwide Coverage with many local Inspectors. Its
                employees have Strong Project Experience from Management to
                Inspection. Dedicated to our Customers, we offer Tailored
                Solutions and Custom Reporting.
              </p>
            </div>
          </div>
          <div className="description__row">
            <p className="center">
              INTERSICA (formerly Socotec Oil & Gas) is ISO 9001 and OHSAS
              18001. Our goal is to become your preferred Global Quality Service
              Partner.
            </p>
          </div>
          <div className="description__row">
            <div className="description__row__col2">
              <div className="contact_box">
                <h2 className="contact_box__header">Conatct Us</h2>
                <a
                  className="contact_box__button"
                  href="https://intersica.com/contact/"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="description__row__col2"> </div>

            <div className="description__row__col2">
              <div className="contact_box">
                <h2 className="contact_box__header">Join Us</h2>
                <a
                  className="contact_box__button"
                  href="https://intersica.com/contact/"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
