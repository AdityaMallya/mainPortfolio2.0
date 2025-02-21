import React from "react";
import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Works from "../works/works";
import Cirt from "../Cirtificate/cirt";
import Contact from "../Contact/contact";
import About from "../About/about";
import Proj from "../Proj/proj";
const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <About />
      <Skills />
      <Works />
      <Proj />
      <Cirt />
      <Contact />
    </div>
  );
};

export default Home;
