import React,{useEffect} from 'react';
import './services.css';
import { BiCreditCardFront,BiCodeBlock,BiMobileAlt } from "react-icons/bi";

const Services = () => {
  


  return (
    <section className="services" >
      <div className="container">
        <div className="row text">
          <h3 data-aos="fade-right" data-aos-duration="1500">MY SERVICES</h3>
          <h1 data-aos="fade-left" data-aos-duration="1500">What I do For My Clients</h1>
        </div>
        <div className="row cards">
          <div className="card1" data-aos="fade-right" data-aos-duration="1500">
            <span className='icon'><BiCreditCardFront/></span>
            <h2 className="title">FrontEnd Development</h2>
            <p className="dis">I Will Design Your Personal Website Or Your Company Website With High Professionalism, I Have A Lot Of Experience In Designing Frontend.</p>
          </div>
          <div className="card1 " data-aos="fade-up" data-aos-duration="1500">
            <span className='icon'><BiMobileAlt/></span>
            <h2 className="title">Responsive Web Design</h2>
            <p className="dis">Ensuring that interfaces adapt smoothly to different devices and implementing them in the best ways</p>
          </div>
          <div className="card1 " data-aos="fade-left" data-aos-duration="1500">
            <span className='icon'><BiCodeBlock/></span>
            <h2 className="title">Performance Optimization</h2>
            <p className="dis">Boost interface speed and efficiency for optimal performance. And linking them in ideal ways to the backends</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
