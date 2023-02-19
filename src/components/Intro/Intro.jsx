import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Sonu Kumar</span>
          <span>
            Front Developer with  experience in web designing and
            <br />
            development ,producting the Quality Work.
          </span>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/sonukumar77">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/sonu-kumar-1110b81a0/">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src="https://avatars.githubusercontent.com/u/82059136?s=400&u=3db8743bcc3071e3442085c5c120a5eea9cf1a82&v=4" alt="boy" />
        <img src={glassesimoji} alt="glassemoji" />
        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "1rem" }} className="floating-div">
          <FloatingDiv image={Thumbup} text1="Full Stack" text2="Developer" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
