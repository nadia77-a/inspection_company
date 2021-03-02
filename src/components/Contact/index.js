import React from "react";
import images from "config/images";

import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="main-content about">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="main-content__top__title centerContent">
              We enable you to meet the challenges of the industry now and in
              the future.
            </div>
          </div>
        </div>
        <div className="who centerContent">
          <div className="tit">Who we are</div>
          <p>
            Compass Engineering is an Independent Technical Service Company in
            Albania that has expert knowledge and experience of Engineering
            Services, Design, Construction Supervision Expediting, Testing &
            Inspection, NDT, Welding and Welder Qualification, Integrity
            Evaluation, Painting and Coating, Procurement. Not limited to 3rd
            Party Manufacturing Inspections, Supplier Quality Surveillance
            (SQS), serving oil & gas companies, installation contractors,
            manufacturers and suppliers. <br></br><br></br> Capability of delivering
            highly qualified expertise with the intention of exceeding our
            client’s expectations for safety, quality and functionality.
          </p>
          <div className="det">
          <div className="c1">
            <img
              alt=""
              src={images.contact1}
              className="img1"
            ></img>
            <img
              alt=""
              src={images.contact2}
              className="img2"
            ></img>
          </div>
          <div className="c2">
            <h1>Company Quality Policy</h1>
            <p>
              <i className="fa fa-check-circle"></i> To adopt maintain and
              improve its quality system in compliance with national and
              International standard.
            </p>{" "}
            <p>
              <i className="fa fa-check-circle"></i> To comply with requirements
              agreed. These activities must always be conducted with all
              applicable regulations.
            </p>{" "}
            <p>
              <i className="fa fa-check-circle"></i> To pursue the continuous
              improving to the quality of its services with a view to satisfying
              its customers.
            </p>
            <p>
              <i className="fa fa-check-circle"></i> Initiate our personnel to
              enhance knowledge and professional competence. Our people are our
              best assets.
            </p>
          </div>
         
          </div>

          <div className="aboutDetils">
            <div className="aboutDetils__detail">
              <h1>Our Vision</h1>
              Being best means providing outstanding quality, service and value
              of Technical Services to our customer.
            </div>
            <div className="aboutDetils__detail">
              <h1>Trust</h1>
              We are aware that we cannot create a reliable and professional
              company without trusting each other. Trust is underlying all other
              values and goals.
            </div>
            <div className="aboutDetils__detail">
              <h1>Objectives</h1>We realize that the best possible result can be
              achieved by becoming professionals and helping each other in
              pursuit of the company objectives.
            </div>
            <div className="aboutDetils__detail">
              <h1>Professional expertise</h1>A powerful tool of our approach to
              values, people, processes, and everything we do.
            </div>

            <div className="aboutDetils__detail">
              <h1>Respect</h1>
              We have respect for the country where we live, including its
              legislative framework; rules of business; for our employees,
              customers and partners.
            </div>
          </div>
        </div>
        <div className="tit">Where could you find us</div>
        <div className="centerContent description contact">
          <div className="details">
            <div className="location-box">
              <a className="media-left pull-left">
                <i className="fa fa-map-marked"></i>
              </a>
              <div className="media-body">
                <strong>OUR OFFICE LOCATION</strong>
                <p>Rr. Shyqyri Brari, Tirane - Albania</p>
              </div>
            </div>
            <div className="location-box">
              <a className="media-left pull-left">
                <i className="fa fa-map-marked"></i>
              </a>
              <div className="media-body">
                <strong>OUR CONTACT E-MAIL</strong>
                <p>info@compasseng.al</p>
              </div>
            </div>
            <div className="location-box">
              <div className="media-body">
                <strong>CALL US</strong>
                <p>+355676757576</p>
              </div>
            </div>
            <div className="location-box">
              <div className="media-body">
                <strong>FOLLOW US</strong>
                <p> <a href="https://www.linkedin.com/in/compass-engineering-8b4644205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BAwCt%2FhKTjqVzggifbIiKA%3D%3D">Linkedin: <i className="fa fa-linkedin"></i></a></p>
              </div>
            </div>
          </div>
          <div className="map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height="342"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=rruga%20shyqyr%20brari&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <a href="https://yt2.org/youtube-to-mp3-ALeKk00qEW0sxByTDSpzaRvl8WxdMAeMytQ1611842368056QMMlSYKLwAsWUsAfLipqwCA2ahUKEwiikKDe5L7uAhVFCuwKHUuFBoYQ8tMDegUAQCSAQCYAQCqAQdnd3Mtd2l6"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
