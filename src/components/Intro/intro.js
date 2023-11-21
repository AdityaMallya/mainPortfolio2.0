import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">ADITYA MALLYA</span>
          <br />
          STUDENT
        </span>
        <p className="introPara">
          I am a not so skilled web designer with little to no experiance in
          creating anything
        </p>
      </div>
      <img src={bg} alt="" className="bg"></img>
    </section>
  );
};

export default Intro;
