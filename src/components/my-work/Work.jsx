import React, { useEffect } from "react";
import "./work.css";
import iamg1 from "../../images/gpt.png";
import iamg2 from "../../images/homeImage.png";
import iamg3 from "../../images/kids.png";
import iamg4 from "../../images/rusturent.jpg";
import iamg5 from "../../images/smart.jpg";
import iamg6 from "../../images/Screenshot (3).png";
import iamg7 from "../../images/dailycard.png";
import iamg8 from "../../images/site.autodrop.png";
import iamg9 from "../../images/AutoDrop-client..png";
import iamg10 from "../../images/AutoDrop-Admain.png";
import iamg11 from "../../images/linkatik.png";
import iamg12 from "../../images/fahadalhoot.png";
import iamg13 from "../../images/chairlocation.png";
import { BiLinkAlt, BiLinkExternal } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="Portfolio">
      <div className="container">
        <h3 data-aos="fade-right">MY WORK</h3>
        <h1 data-aos="fade-right">See My Works Which Will Amaze You!</h1>

        <div className="my-work">
          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg7} alt="photo" />
            <div className="itme__text">
              <h2>dailycard</h2>
              <p>A website that helps you charge all electronic games</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_1"
                  data-tooltip-content="Property rights company dailycard"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_1"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://site.autodrop.me/ar" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_1" />
            <Tooltip id="Go_1" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg9} alt="photo" />
            <div className="itme__text">
              <h2>Dashboard client</h2>
              <p>
                A control panel that helps the user complete all his operations,
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_2"
                  data-tooltip-content="Property rights company Auto Drop"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_2"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://autodrop.me/ar" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_2" />
            <Tooltip id="Go_2" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg8} alt="photo" />
            <div className="itme__text">
              <h2>Auto Drop website</h2>
              <p>This is company profile to Auto Drop .</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_3"
                  data-tooltip-content="Property rights company Auto Drop"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_3"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://site.autodrop.me/ar" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_3" />
            <Tooltip id="Go_3" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg10} alt="photo" />
            <div className="itme__text">
              <h2>Dashboard Admin</h2>
              <p>A control panel helps the manager to follow up the work.</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_4"
                  data-tooltip-content="Property rights company Auto Drop"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_4"
                  data-tooltip-content="Property rights company Auto Drop"
                >
                  <a href="/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_4" />
            <Tooltip id="Go_4" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg11} alt="photo" />
            <div className="itme__text">
              <h2>Linkatik</h2>
              <p>the website Helps you create, share and sell links.</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_5"
                  data-tooltip-content="Property rights company Linkatik"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_5"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://app.linkatik.com" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_5" />
            <Tooltip id="Go_5" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg12} alt="photo" />
            <div className="itme__text">
              <h2>Fahd Al-Hoot Store</h2>
              <p>A site that helps you buy books and courses in business</p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_6"
                  data-tooltip-content="Property rights company discovery"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_6"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://fahadalhooti.com/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_6" />
            <Tooltip id="Go_6" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg13} alt="photo" />
            <div className="itme__text">
              <h2>chair location</h2>
              <p>
                A site that helps you find the nearest buildings and book them.
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_13"
                  data-tooltip-content="Property rights company Eramo"
                >
                  <a href="/">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="Go_13"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://www.chairlocation.com/en" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_13" />
            <Tooltip id="Go_13" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg1} alt="photo" />
            <div className="itme__text">
              <h2>GPT</h2>
              <p>
                The website helps you learn about the latest technology on the
                market
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_7"
                  data-tooltip-content="Go to the cdoe"
                >
                  <a href="https://github.com/sayed-2000/Gpt" target="blank">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_7"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://gpt-ivory-omega.vercel.app/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_7" />
            <Tooltip id="Go_7" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg5} alt="photo" />
            <div className="itme__text">
              <h2>Smart</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_8"
                  data-tooltip-content="Go to the cdoe"
                >
                  <a href="https://github.com/sayed-2000/smart" target="blank">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_8"
                  data-tooltip-content="Go to the website"
                >
                  <a href="https://smart-ten-eta.vercel.app/" target="blank">
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_8" />
            <Tooltip id="Go_8" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg4} alt="photo" />
            <div className="itme__text">
              <h2>Restaurant</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_9"
                  data-tooltip-content="Go to the code"
                >
                  <a
                    href="https://github.com/sayed-2000/Restaurant-ReactProject"
                    target="blank"
                  >
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_9"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://restaurant-react-project.vercel.app/"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_9" />
            <Tooltip id="Go_9" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg3} alt="photo" />
            <div className="itme__text">
              <h2>Kids fun</h2>
              <p>
                The website helps you learn about the latest technology on the
                market
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_10"
                  data-tooltip-content="Go to the code"
                >
                  <a href="https://github.com/sayed-2000/kids-2" target="blank">
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_10"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://github.com/sayed-2000/kids-2678"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_10" />
            <Tooltip id="Go_10" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg2} alt="photo" />
            <div className="itme__text">
              <h2>Desing Home</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_11"
                  data-tooltip-content="Go to the code"
                >
                  <a
                    href="https://github.com/sayed-2000/desing-Home"
                    target="blank"
                  >
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_11"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://github.com/sayed-2000/desing-Home6790"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_11" />
            <Tooltip id="Go_11" />
          </div>

          <div className="itme" data-aos="fade-down" data-aos-duration="1500">
            <img src={iamg6} alt="photo" />
            <div className="itme__text">
              <h2>Food time</h2>
              <p>
                The website helps you sell your products and display them easily
                to users
              </p>
              <div className="icon">
                <span
                  data-tooltip-id="rights_12"
                  data-tooltip-content="Go to the code"
                >
                  <a
                    href="https://github.com/sayed-2000/food-time"
                    target="blank"
                  >
                    <BiLinkAlt />
                  </a>
                </span>
                <span
                  data-tooltip-id="rights_12"
                  data-tooltip-content="Go to the website"
                >
                  <a
                    href="https://sayed-2000.github.io/food-time/index-page1.html"
                    target="blank"
                  >
                    <BiLinkExternal />
                  </a>
                </span>
              </div>
            </div>
            <Tooltip id="rights_12" />
            <Tooltip id="Go_12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
