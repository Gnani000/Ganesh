import React from "react";
import "./Skills.css";
import autocadLogo from './Images/AutocadLogo.png';
import sketchupLogo from './Images/SketchUp.jpg';
import d5Logo from './Images/D5.png';

const Skills = () => {
  const smallLogoStyle = {
    width: '100px',
    height: 'auto',
    marginRight: '10px',
  };



  return (
    <div className="skills-container">
      <br />  
      <div className="skills-section">
        <div className="soft-skills">
          <h1  style={{ fontSize: "50px", fontWeight: "bold"}}>Skills</h1>
          <div className="container">
            <div className="logo-container">
              <img src={autocadLogo} alt="AutoCAD Logo" className="logo" style={smallLogoStyle} />
              <p>Autocad</p>&nbsp;&nbsp;
              <div className="bar back advanced" data-skill="Autocad"></div> 
            </div>
            <div className="logo-container">
              <img src={d5Logo} alt="D5 render Logo" className="logo" style={smallLogoStyle} />
              <p>D5 Render</p>&nbsp;&nbsp;
              <div className="bar back advanced" data-skill="D5 Render"></div>
            </div>
            <div className="logo-container">
              <img src={sketchupLogo} alt="SketchUp Logo" className="logo" style={smallLogoStyle } />
              <p>SketchUp</p>
              <div className="bar back advanced" data-skill="SketchUp"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
