import React from "react";

import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="main-content__top__title centerContent">
              Our Offices
            </div>
          </div>
        </div>
        <div className="centerContent description contact">
          <div className="details">
          <div className="location-box"> <a className="media-left pull-left"> <i className="fa fa-map-marked"></i></a>
							  <div className="media-body"> <strong>OUR OFFICE LOCATION</strong>
								<p>rruga Shyqyri Brari, Tirane, Albaniia</p>
							  </div>
							</div>
              <div className="location-box"> <a className="media-left pull-left"> <i className="fa fa-map-marked"></i></a>
							  <div className="media-body"> <strong>OUR CONTACT E-MAIL</strong>
								<p>test@compass.al</p>
							  </div>
							</div>
              <div className="location-box"> <a className="media-left pull-left"> <i className="icon-map"></i></a>
							  <div className="media-body"> <strong>Call us 24/7</strong>
								<p>+92 - 0123-333-1245 | +92 - 0123-333-1245</p>
							  </div>
							</div>
          </div>
          <div className="map">map</div>
        </div>
      </div>
    );
  }
}

export default Contact;
