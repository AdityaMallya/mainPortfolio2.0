import React from "react";
import "./cirt.css";
import Cert from "../../assets/cer.png.jpg";
import Ific from "../../assets/cert2.png.jpg";

const Cirt = () => {
  return (
    <section id="crit">
      <h2 className="critTitle">CERTIFICATES</h2>
      <span className="critDesc">Some of the certificates i have </span>
      <div className="critImgs">
        <img src={Cert} alt="cer1" className="critImg"></img>
        <img src={Ific} alt="ific" className="critImg"></img>
      </div>
    </section>
  );
};

export default Cirt;
