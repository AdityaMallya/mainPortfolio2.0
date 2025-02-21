import React from "react";
import "./about.css";
import Emoji from "../../assets/emoji.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDesc">My name is ADITYA MALLYA </span>
      <div className="aboutBars">
        <div className="aboutBar">
          <div className="aboutBarText">
            <p>
              Welcome to my portfolio! I'm a not so passionate web developer
              with a strong background in HTML,CSS and JAVASCRIPT.
            </p>
            <p>
              I dont really love creating responsive and user-friendly websites
              but  dont really mind doing it.When I'm not coding you can
              probably find me doing something dumb..
            </p>
            <p>
              MY hobbies are playing GAMES(INDOOR/OUTDOOR) and obviously trying
              to kill my self at every chance i get.
            </p>
          </div>
        </div>
      </div>
      <img src={Emoji} alt="" className="emo"></img>
    </section>
  );
};

export default About;
