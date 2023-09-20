import React,{useEffect} from 'react';
import './skills.css';
import css from '../../images/css.png';
import boot from '../../images/boot.png';
import css2 from '../../images/css2.png';
import js from '../../images/js.png';
import reactImag from '../../images/react.png';
import sass from '../../images/sass.png';


const Skills = () => {
  return (
    <section className="skills" >
        <div className="container">
            <div className="row">
                <div className="col-md-6 text" data-aos-duration="1500" data-aos="fade-right">
                    <h3>MY SKILLS</h3>
                    <h1>What My Programming Skills Included?</h1>
                    <p>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                </div>
                <div className="image col-md-6"data-aos="fade-left" >
                    <div className="children">
                    <span className="itme"   data-aos="flip-left">  <img src={css} alt=""/></span>
                    <span className="itme"  data-aos="flip-up">  <img src={boot} alt=""/></span>
                    <span className="itme"   data-aos="flip-right">  <img src={css2} alt=""/></span>
                    <div className="mr"></div>
                    <span className="itme" data-aos="flip-left">  <img src={sass} alt=""/></span>
                    <span className="itme" data-aos="flip-up">  <img src={js} alt=""/></span>
                    <span className="itme" data-aos="flip-right">  <img src={reactImag} alt=""/></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
