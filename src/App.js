import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/works/works";
import Contact from "./components/Contact/contact";
import Cirt from "./components/Cirtificate/cirt";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Works />} />
          <Route path="/Certificate" element={<Cirt />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
