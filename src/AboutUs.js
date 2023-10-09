// AboutUs.js
import React from "react";
import profileImage from "./Images/Ganesh_Pic.jpeg"; // Adjust the path accordingly

const AboutUs = () => {
  const containerStyle = {
    backgroundColor: "#535e5b",
    color: "white",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  };

  const imageContainerStyle = {
    width: "20%", // 30% of the container width
    marginRight: "40px", // Adjust the right margin for the image section
  };

  const textContainerStyle = {
    width: "60%", // 70% of the container width
    textAlign: "left", // Align text to the left
  };

  const profileImageStyle = {
    width: "auto", // Make the image take up the full width of its container
    height: "200px",
    borderRadius: "50%",
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold"}} >About Us</h1>
        <p style={{ fontSize: "20px",  fontFamily: "Berlin Sans FB, sans-serif" }}>
          I am a passionate and creative interior designe in transforming spaces into stunning, functional, and aesthetically pleasing environments. I thrive on the challenge of bringing innovative design concepts to life and exceeding client expectations.I have expertice in space planning,material selection, color theory and lighting design.
        </p><br/>
        <ul>
          <li style={{ fontSize: "20px",  fontFamily: "Berlin Sans FB, sans-serif" }}>Worked as Interior Designer at Vajragiri Interiors at Banglore.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
