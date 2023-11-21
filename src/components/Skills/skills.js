import React from "react";
import "./skills.css";
import WebDesign from "../../assets/website-design.png";
import Cprogram from "../../assets/cprog.png";
import Pyhi from "../../assets/py.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a not so skilled web designed with no experience in anything{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>WEB DESIGN</h2>
            <p>html,css,js,react js,express js</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Cprogram} alt="Cprograms" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>C PROGRAMING </h2>
            <p>basic c programing</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Pyhi} alt="Pyhi" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>PYTHON</h2>
            <p>basic python programing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
