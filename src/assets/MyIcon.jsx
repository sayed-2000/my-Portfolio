import React from 'react';
import './my-icon.css';
import { BiLogoFacebook,BiLogoTwitter,BiLogoGithub,BiLogoLinkedin,BiDownload } from "react-icons/bi";

const MyIcon = () => {
  return (
    <div className="my-icon">
    <div className="icons">
    <span><a href="https://www.facebook.com/profile.php?id=100012123040222" target='blank'><BiLogoFacebook/></a></span>
    <span><a href="#" target='blank'><BiLogoTwitter/></a></span>
    <span><a href="https://github.com/sayed-2000" target='blank'><BiLogoGithub/></a></span>
    <span> <a href="https://www.linkedin.com/in/sayed-aymen-8b586b255/" target='blank'><BiLogoLinkedin/></a></span>
   </div>
   </div>
  )
}

export default MyIcon
