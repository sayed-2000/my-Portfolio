import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import test2 from '../../images/test-22.jpg';




const About = () => {    
  return (
    <section className="about" id='about'>
      <div className="container">
        <h1 data-aos-duration="1500" data-aos="fade-right">About <span>Me</span></h1>
        <div className="imag"  data-aos-duration="1500"  data-aos="zoom-in" >
          <div className='circle' >
            <img src={test2} alt="my photo"/>
          </div>
        </div>
        <h3 className="title" data-aos-duration="1500" data-aos="fade-left">Frontend Developer</h3>
        <p className="dis"  data-aos="flip-up" data-aos-duration="1500">
        Experienced JavaScript Developer with 2 years in the industry. Proficient
with React. Use the problem-solving ability to improve

application performance through visualization, tools, and integrated de-
sign. Accelerate product life cycle and deliver projects 100% on

deadline. 
        </p>
      </div>
    </section>
  )
}

export default About
