// Image.js
import React from "react";
import mainImage from "./Images/Banner.jpg"; // Adjust the path accordingly

const Image = ({ altText, text, style }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    ...style,
  };

  const imageStyle = {
    background: `url(${mainImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0 50%", // Align the left side of the image with the center of the container
    width: "100%",
    height: "100%",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    zIndex: 2, // Set the z-index to a value higher than the image's z-index
    fontSize: "7rem",
    color: "#5b5149", 
    fontFamily: "Berlin Sans FB, sans-serif"
    };
  const textsmallStyle = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    fontFamily: "Berlin Sans FB, sans-serif",
    color: "#5b5149",
    fontSize: "2rem"
  };
  return (
    <div style={containerStyle}>
      <div style={imageStyle}></div>
      <div style={textStyle}>I am Ganesh</div>
      <div style={textsmallStyle}>Interior Designer</div>
    </div>
  );
};

export default Image;
