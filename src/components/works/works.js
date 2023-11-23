import React from "react";
import "./works.css";
import Loudr from "../../assets/loud.png";
import Shar from "../../assets/shad.png";
import Canara from "../../assets/can.png";

const Works = () => {
  return (
    <section id="works">
      <span className="workTitle">where did i study ?</span>
      <span className="workDesc">
        I studied in 3 different schools and colleges and am still undergoing my
        BE in CSE in Canara Engineering College
      </span>
      <div className="workBars">
        <div className="workBar">
          <img src={Loudr} alt="loud" className="workBarImg"></img>
          <div className="workBarText">
            <h2>Lourdes Central School</h2>
            <p>KG-10th</p>
          </div>
        </div>
        <div className="workBar">
          <img src={Shar} alt="shar" className="workBarImg"></img>
          <div className="workBarText">
            <h2>Sharada PU College</h2>
            <p>1PUC/2PUC</p>
          </div>
        </div>
        <div className="workBar">
          <img src={Canara} alt="can" className="workBarImg"></img>
          <div className="workBarText">
            <h2>Canara Engineering College</h2>
            <p>BE IN CSE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
