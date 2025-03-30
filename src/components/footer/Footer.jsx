import React from 'react';
import './footer.css'
import img from '../../images/test-3.jpg';
import img1 from '../../images/logo-F.png';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="box-img">
                <a href="#home">
                <img src={img1}  />
                </a>
            </div>
            <h3>© 2023 Proudly Powered by
                <a href="#home"><span>Sayed</span></a> 
            </h3>
        </div>
    </footer>
  )
}

export default Footer
