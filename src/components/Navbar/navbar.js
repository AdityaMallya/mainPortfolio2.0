import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo1.png";
import { Link, useLocation } from "react-router-dom";
import Menus from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, SetActiveNav] = useState("/");
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    SetActiveNav(location.pathname);
  }, [location]);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        {activeNav === "/" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem "
          >
            HOME
          </Link>
        )}

        {activeNav === "/About" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/About"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            ABOUT
          </Link>
        )}
        {activeNav === "/Skills" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Skills"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            SKILLS
          </Link>
        )}
        {activeNav === "/Education" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Education"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            EDUCATION{" "}
          </Link>
        )}
        {activeNav === "/Certificate" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Certificate"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            CERTIFICATE{" "}
          </Link>
        )}
        {activeNav === "/Contact" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Contact"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            CONTACT{" "}
          </Link>
        )}
      </div>

      <img
        src={Menus}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="/About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/About" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="/Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/Skills" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          SKILLS
        </Link>
        <Link
          activeClass="active"
          to="/Education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/Education" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          EDUCATION{" "}
        </Link>
        <Link
          activeClass="active"
          to="/Certificate"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/Certificate" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          CERTIFICATE{" "}
        </Link>
        <Link
          activeClass="active"
          to="/Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`ListItem ${activeNav === "/Contact" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          CONTACT{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
