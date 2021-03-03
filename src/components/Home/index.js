import React from "react";
import allImages from "config/images";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

import Particles from "react-particles-js";
import images from "../../config/images";

class Home extends React.Component {
  render() {
    const services = [
      {
        id: 1,
        name: "Design",
        link: "/design",
      },
      {
        id: 2,
        name: "Expediting Services",
        link: "/inspection-expediting",
      },
      {
        id: 3,
        name: "Welding",
        link: "/welding/",
      },
      {
        id: 4,
        name: "QA&QC",
        link: "/quality-support",
      },
      {
        id: 5,
        name: "Oil and Gas",
        link: "/oil-gas",
      },
    ];

    return (
      <React.Fragment>
        <div className="allElem">
          <div className="centered">
            <img  alt = "" className="logo" src={images.logo1} alt="Compass" />
          </div>
          <div className="services">
            {services.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <div className="service" key={index}>
                    <div className="title">{item.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 200,
                  height: 200,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            config_demo: {
              hide_card: false,
              background_color: "#b61924",
              background_image: "",
              background_position: "50% 50%",
              background_repeat: "no-repeat",
              background_size: "cover",
            },
          }}
          style={{
            width: "100%",
            backgroundImage: `url(${allImages.img1})`,
            backgroundSize: "cover",
          }}
        />
        
      </React.Fragment>
    );
  }
}

export default Home;
