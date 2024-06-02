import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./sonu_resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Experienced software engineer with a passion for developing innovative<br/>
          programs that expedite the efficiency and effectiveness of<br/>
          organizational success!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* 1st card */}
        <div style={{ left: "14rem" }}>
        <Card
            emoji={Glasses}
            heading={"Frontend Developer"}
            detail={"Html,Css,JavaScript,React,Redux"}
          />
        </div>

        {/* 2nd card*/}

        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
          emoji={Humble}
          heading={"Backend Developer"}
          detail={"Node Js,Express Js,Php"}
        />
        </div>
        {/* 3rd card*/}

        <div style={{ left: "12rem", top: "19rem" }}>
          
          <Card
            emoji={HeartEmoji}
            heading={"Database"}
            detail={"Mysql,Mongo DB"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
