// Image.js
import React from "react";
// import mainImage from "./Images/WallDesign.jpg";
import ImageGallery from "./Images2";
import image1 from '../src/Images/ProjectI/image1.png'
import image2 from "../src/Images/ProjectI/image2.png";
import image3 from "../src/Images/ProjectI/image3.png";
import image4 from "../src/Images/ProjectI/image4.png";
import image5 from "../src/Images/ProjectI/image5.png";
import image6 from "../src/Images/ProjectI/image6.png";
import image7 from "../src/Images/ProjectI/image7.png";
import image8 from "../src/Images/ProjectI/image8.png";
// import image9 from "../src/Images/ProjectI/image9.png";
import image10 from "../src/Images/ProjectI/image10.png";
import Container from "@mui/material/Container";



const ProjectsSection = ({ altText, text, style }) => {
 
  const imagePaths = [
    {
      url: image1
    },
    {
      url: image2
      },
    {
      url: image3
    },
    {
      url: image4 
    },
    {
      url: image5
    },
    {
      url: image6
    },
    {
      url: image7
    },
    {
      url: image8
    },
    {
      url: image10
    },
  ];

  return (
    <Container>
      <br />
      <h2 style={{ fontSize: "50px", fontWeight: "bold"}}>Projects</h2><br/>
      <ImageGallery images={imagePaths} />
      <br/>
      <br/>
    </Container>
  );
};

export default ProjectsSection;
