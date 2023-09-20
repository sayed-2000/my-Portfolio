import React, { useEffect } from 'react';
import './Home.css';
import home from "../../images/home (5).png";
import home2 from "../../images/home2.png";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { BiLogoFacebook,BiLogoTwitter,BiLogoGithub,BiLogoLinkedin,BiDownload } from "react-icons/bi";
import MyIcon from '../../assets/MyIcon';


const Home = () => {



  const [text] = useTypewriter({
    words:['Front End Developer','Freelancer','React Developer'],
    loop:{},
    typeSpeed:120,
    delaySpeed:200,
  });

  return (
    <section className='home' id='home'>
      <div className="container">
        <div className="row">
          <div className="col-md-7 text" data-aos="fade-up" data-aos-duration="1500">
             <h3>HELLO I'M</h3>
             <h1>Sayed Aymen</h1>
             <h3>
             I'M A <span>{text}</span>
                <span><Cursor/></span>
             </h3>
             <p className='dis'> I’m A Front End Developer With 2 Years Of Experience. I Worked On Different Projects, With Different Technologies. I Can Do More Than Front End Work, Because I Can Work With Back End Technologies And Use It To Make Restful Apis</p>
             <MyIcon/>
             <button><a href="https://drive.google.com/u/1/uc?id=1-bQ48AmVN9mYXAU7hChpPW9wyklWXpid&export=download" target='blank'>Download CV <span><BiDownload/></span></a></button>
          </div>
          <div className="col-md-5 photo" data-aos="fade-down" data-aos-duration="1500">
              <img src={home} alt="home image"  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
