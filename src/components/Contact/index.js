import React from "react";

import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="main-content__top__title centerContent">
              We enable you to meet the challenges of
            the industry now and in the future.
            </div>
          </div>
        </div>
        <div className="who centerContent">
          <p>
            Compass Engineering was created in 2019 as an Independent Technical Service 
            Company that has expert knowledge and experience of Engineering Services - Expediting - Testing & Inspection - NDT - Welding 
            and Welder Qualification - Painting and Coating - Design - Construction Supervision. Not limited to integrity evaluation, 
            3rd party manufacturing inspections, supplier quality surveillance, by serving oil & gas companies. Capability of delivering 
            highly qualified expertise with the intention of exceeding our client’s expectations for safety, quality, functionality
             and deliver 
            services that stand the test of time.
              
          </p>
          <div className="c1">
            <img alt="" src="https://i.imgur.com/rQu0EdY.jpeg"></img>
          </div>
          <div className="c2">
            <h1>Company Quality Policy</h1>
            <p>
              To adopt maintain and improve its quality system in compliance
              with national and International standard.
            </p>{" "}
            <p>
              To comply with the requirements agreed upon and contractually
              committed with the Customer, in all its service activities. These
              activities must always be conducted in compliance with all
              applicable laws and regulations.
            </p>{" "}
            <p>
              To pursue the continuous improving to the quality of its
              services with a view to satisfying its Customers.
            </p>
            <p>
              Initiate our personnel to enhance knowledge, leadership and
              professional competence and maintain consistent credibility. Our
              people are our best assets.
            </p>
          </div>
          <div className="aboutDetils">
            <p>
              <h1>Our Vision</h1>
              Being best means providing
              outstanding quality, service and value of Technical
              Services to our customer.
            </p>
            <p>

              <h1>Benefits at a Glance</h1>
              <ul>
                <li>The assurance that all of your
                planning, construction, or operational processes are optimized –
                so that you can fulfill all requirements and run cost-effective
              operations.</li>
                <li>A worldwide network of experts and
              inspectors.</li>
                <li> An independent partner providing support and
                ensuring regulatory compliance across all stages of the component
              life-cycle as well as access to international markets.</li>
                <li>An
                experienced partner ensuring asset safety and reliability
              throughout the entire life-cycle.</li>
              <li>Continuously improved
                technologies through dedicated innovation programs and the
              perpetual education and training of our personnel.</li>
              </ul>

              <h1>Trust</h1>
              We are aware that we cannot create a reliable and professional
              company without trusting each other. Therefore, the question “Can
              I trust you?” is essential for each newcomer to the team. Trust is
              underlying all other values and goals. Trust between partners and
              customers means that, in any event, together we will find the best
              solution. 
            </p>
            <p>
              <h1>Goal Pursuit / Objectives.</h1> The goal pursuit culture and
              perception of what each of us must do to achieve the goals both,
              short-term and long-term, personal and collective, have dominated
              our company. We realize that the best possible result can be
              achieved only by becoming professionals and helping each other in
              pursuit of the company objectives.
            </p>
            <p>
              <h1>Professional expertise</h1>
              A powerful tool in creating more value
              for customers, offering the best solutions to improve business
              processes, and saving time and money. Professional expertise
              represents our approach to values, people, processes, and
              everything we do.
            </p>

            <p>
              <h1>Respect</h1>
              We have respect for the country where we live, including its
              legislative framework and tax regime; we have respect for the
              rules of business and freedom to express individual opinions; we
              have respect for our employees, customers and partners.
            </p>
          </div>
        </div>
        <div className="centerContent description contact">
          <div className="details">
            <div className="location-box">
              {" "}
              <a className="media-left pull-left">
                {" "}
                <i className="fa fa-map-marked"></i>
              </a>
              <div className="media-body">
                {" "}
                <strong>OUR OFFICE LOCATION</strong>
                <p>Rr. Shyqyri Brari, Tirane - Albania</p>
              </div>
            </div>
            <div className="location-box">
              {" "}
              <a className="media-left pull-left">
                {" "}
                <i className="fa fa-map-marked"></i>
              </a>
              <div className="media-body">
                {" "}
                <strong>OUR CONTACT E-MAIL</strong>
                <p>info@compasseng.al</p>
              </div>
            </div>
            <div className="location-box">
              {" "}
              <a className="media-left pull-left">
                {" "}
                <i className="icon-map"></i>
              </a>
              <div className="media-body">
                {" "}
                <strong>CALL US</strong>
                <p>+355676757576</p>
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
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
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
