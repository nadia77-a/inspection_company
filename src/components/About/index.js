import React from "react";

import "./style.css";
import images from "config/images";

class Quality extends React.Component {
  state = {
    isActive: "Design",
  };

  render() {
    const { isActive } = this.state;
    const services = [
      {
        id: 1,
        name: "Design",
        images: [
          {
            id: 11,
            title: "title1",
            src:
            images.q1,
          },
          {
            id: 12,
            title: "title1",
            src:images.q2
          },
          {
            id: 11,
            title: "title1",
            src:images.q3,
          },
          {
            id: 11,
            title: "title1",
            src:images.q4,
          },
          {
            id: 11,
            title: "title1",
            src:images.q5,
          },
          {
            id: 11,
            title: "title1",
            src:images.q2,
          },
        ],
      },
      {
        id: 2,
        name: "Inspection and Expediting",
        images: [
          {
            id: 11,
            title: "title1",
            src:images.o1,
          },
          {
            id: 11,
            src:images.o2,
          },
          {
            id: 11,
            src:images.o3,
          },
          {
            id: 11,
            src:images.o4,
          },
          {
            id: 12,
            src:images.o5
          },
        ],
      },
      {
        id: 3,
        name: "Welding",
        title: "title1",
        images: [
          {
            id: 11,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 12,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
        ],
      },
      {
        id: 4,
        name: "Quality Support",
        title: "title1",
        images: [
          {
            id: 11,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 12,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
        ],
      },
      {
        id: 1,
        name: "Oil and Gas",
        title: "title1",
        images: [
          {
            id: 11,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 12,
            src:
              "https://quintus.modeltheme.com/wp-content/uploads/2016/02/quintus_pic2.jpg",
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
          {
            id: 11,
            src:images.q1,
          },
        ],
      },
    ];
    return (
      <div className="main-content projects">
        <div className="main-content__top">
          <div className="addShadow">
            <div className="header-content">
              <div className="main-content__top__title centerContent">
                OUR PROJECTS
                <div className="description">
                  Compass Engineering provides engineering design, on-site
                  services to the oil & gas processing and petrochemical
                  sectors. Our team of professionals have direct industry
                  experience that adds significant value at each project stage.
                  We are uniquely suited to provide responsive support.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerContent description">
          <ul className="tabs">
            {services.map((item, index) => {
              return (
                <li
                  key={index}
                  data-tab-target={`#` + item.name}
                  className={`tab ` + (isActive === item.name ? "active" : "")}
                  onClick={() => this.setState({ isActive: item.name })}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>

          <div className="tab-content">
            {services
              .filter((item) => item.name === isActive)
              .map((item, index) => {
                return (
                  <div key={index}>
                    {item.images.map((sub, i) => {
                      return (
                        <div key={i}>
                          <img src={sub.src} alt=""></img>
                          <h3>{sub?.title}</h3>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Quality;
