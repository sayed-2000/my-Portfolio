
import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import test2 from "../../images/test-22.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h1 data-aos-duration="1500" data-aos="fade-right">
          About <span>Me</span>
        </h1>
        <div className="imag" data-aos-duration="1500" data-aos="zoom-in">
          <div className="circle">
            <img src={test2} alt="my photo" />
          </div>
        </div>
        <h3 className="title" data-aos-duration="1500" data-aos="fade-right">
          Frontend Developer
        </h3>
        <p className="dis" data-aos="flip-up" data-aos-duration="1500">
          Frontend Developer with 3+ years of expertise in building scalable web
          applications. Specialized in creating responsive, user-centric
          interfaces and leading development teams. Proven track record in e
          commerce and real estate platforms with focus on performance
          optimization and cross-browser compatibility
        </p>
      </div>
    </section>
  );
};

export default About;
