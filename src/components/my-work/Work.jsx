import React,{useEffect} from 'react';
import './work.css';
import iamg1 from '../../images/gpt.png'
import iamg2 from '../../images/homeImage.png'
import iamg3 from '../../images/kids.png'
import iamg4 from '../../images/rusturent.jpg'
import iamg5 from '../../images/smart.jpg'
import iamg6 from '../../images/Screenshot (3).png'
import { BiLinkAlt,BiLinkExternal } from "react-icons/bi";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Work = () => {

  useEffect(()=> {
    Aos.init({duration: 1500})
  },[])

  return (
  <section className='Portfolio'>
    <div className="container">
      <h3 data-aos="fade-right">MY WORK</h3>
      <h1 data-aos="fade-left" >See My Works Which Will Amaze You!</h1>
      <div className="my-work" >
        <div className="itme" data-aos="fade-right" data-aos-duration="1500" ><img src={iamg1} alt="photo" />
          <div className="itme__text">
            <h2>GPT</h2>
            <p>The website helps you learn about the latest technology on the market</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/Gpt" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://gpt-ivory-omega.vercel.app/" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>
        
        <div className="itme" data-aos="fade-up" data-aos-duration="1500" ><img src={iamg5} alt="photo" />
          <div className="itme__text">
            <h2>Smart</h2>
            <p>The website helps you sell your products and display them easily to users</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/smart" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://smart-ten-eta.vercel.app/" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>

        <div className="itme" data-aos="fade-left"   data-aos-duration="1500"><img src={iamg4} alt="photo" />
          <div className="itme__text">
            <h2>Restaurant</h2>
            <p>The website helps you sell your products and display them easily to users</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/Restaurant-ReactProject" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://restaurant-react-project.vercel.app/" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>

        <div className="itme" data-aos="fade-right"  data-aos-duration="1500">
          <img src={iamg3} alt="photo" />
          <div className="itme__text">
            <h2>Kids fun</h2>
            <p>The website helps you learn about the latest technology on the market</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/kids-2" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://github.com/sayed-2000/kids-2678" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>

        <div className="itme" data-aos="fade-up" data-aos-duration="1500">
          <img src={iamg2} alt="photo" />
          <div className="itme__text">
            <h2>Desing Home</h2>
            <p>The website helps you sell your products and display them easily to users</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/desing-Home" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://github.com/sayed-2000/desing-Home6790" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>

        <div className="itme" data-aos="fade-left"   data-aos-duration="1500">
          <img src={iamg6} alt="photo" />
          <div className="itme__text">
            <h2>Food time</h2>
            <p>The website helps you sell your products and display them easily to users</p>
            <div className="icon">
                <span><a href="https://github.com/sayed-2000/food-time" target='blank'><BiLinkAlt/></a></span>
                <span><a href="https://sayed-2000.github.io/food-time/index-page1.html" target='blank'><BiLinkExternal/></a></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Work
