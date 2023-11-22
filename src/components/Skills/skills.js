import React from "react";
import "./skills.css";
import WebDesign from "../../assets/website-design.png";
import Cprogram from "../../assets/cprog.png";
import Pyhi from "../../assets/py.png";
import Card from "../Skillss/card";

const Skills = () => {
  const skills = [
    {
      id: 0,
      h: "WEB DESIGN",
      p: "html,css,js,react js,express js",
      img: WebDesign,
    },
    {
      id: 1,
      h: "C PROGRAMING",
      p: "basic c programing ",
      img: Cprogram,
    },
    {
      id: 2,
      h: "PYTHON",
      p: "basic python programing",
      img: Pyhi,
    },
  ];

  return (
    <div className="skills">
      <div className="skillTitle">MY SKILLS</div>
      <div className="skillDesc">
        im not so good at anything but here are some of them
      </div>
      <div>
        {skills.map((item) => (
          <Card skills={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
