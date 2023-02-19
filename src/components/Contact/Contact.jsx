import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

// import { UilMapMarker } from "@iconscout/react-unicons";
// import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qid794l",
        "template_28stdmb",
        form.current,
        "H2954lAK41kij4GF1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="awesome" style={{marginTop:0}}>
          <span>Contact me </span>
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
        </div>
        <div className="c-detail">
          <h6>Name</h6>
          <h6>Sonu Kumar</h6>
        </div>
        <div className="c-detail">
          <h6>Email</h6>
          <h6> <a href="mailto:someone@example.com">sonukumarhzb77@gmail.com</a> </h6>
        </div>
        <div className="c-detail">
          <h6>Contact</h6>
          <h6>+91-8092059340</h6>
        </div>
        <div className="c-detail">
          <h6>Address</h6>
          <h6>Hazaribag,Jharkhand,India</h6>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contact me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
