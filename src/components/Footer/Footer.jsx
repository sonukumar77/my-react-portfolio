import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave icon" style={{ width: "100%" }} />
      <div className="f-content">
       
        <div className="f-icons">
          
          <a href="https://www.linkedin.com/in/sonu-kumar-1110b81a0/" target="_blank" rel="noreferrer">
          <Linkedin color="white" size="3rem" />
          </a>
          <a href="https://github.com/sonukumar77" target="_blank" rel="noreferrer"> 
          <Github color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Insta color="white" size="3rem" />
          </a>
         
        
        </div>
        <span>Created By Sonu with ❤</span>
        <span>&copy;2023</span>
      </div>
    </div>
  );
};

export default Footer;
