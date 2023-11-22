import React from "react";
import "./card.css";
function Card({ skills }) {
  return (
    <div className="skills">
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarImg">
            <img src={skills.img} alt="hi"></img>
          </div>
          <div className="skillBarText">
            <h1>{skills.h}</h1>
            <p>{skills.p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
