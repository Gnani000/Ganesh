import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const instagramLink = "https://www.instagram.com/ur___in/";
  const linkedinLink = "https://www.linkedin.com/in/banda-ganesh-b4817121b/";
  return (
    <div style={{ backgroundColor: "#ECECEC" }}>
      <br />
      <br />
      <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Contact</h1>
      <br />
      <div style={{ fontSize: "20px", fontFamily: "Berlin Sans FB, sans-serif" }}>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Madhapur, Hyderabad</p>
        <br />
        <p>  <FontAwesomeIcon icon={faPhone} /> Phone: +91 83280 22294</p>
        <br />
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: raagavganesh001@gmail.com</p>
        <br />
        <p>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "2em" }} />
          </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2em" }} />
          </a>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
