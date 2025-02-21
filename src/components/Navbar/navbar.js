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
          <Link activeClass="active" to={"/"} className="desktopMenuListItem ">
            HOME{" "}
          </Link>
        )}

        {activeNav === "/About" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/About"}
            className="desktopMenuListItem"
          >
            ABOUT{" "}
          </Link>
        )}

        {activeNav === "/Skills" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Skills"}
            className="desktopMenuListItem"
          >
            SKILLS{" "}
            </Link>
            
        )}
        {activeNav === "/Education" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Education"}
            className="desktopMenuListItem"
          >
            EDUCATION{" "}
          </Link>
        )}

        {activeNav === "/Project" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Project"}
            className="desktopMenuListItem"
          >
            PROJECTS{" "}
          </Link>
        )}

        {activeNav === "/Certificate" ? (
          ""
        ) : (
          <Link
            activeClass="active"
            to={"/Certificate"}
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
          className={`ListItem ${activeNav === "/" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="/About"
          className={`ListItem ${activeNav === "/About" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="/Skills"
          className={`ListItem ${activeNav === "/Skills" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          SKILLS
        </Link>
        <Link
          activeClass="active"
          to="/Education"
          className={`ListItem ${activeNav === "/Education" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          EDUCATION{" "}
        </Link>
        <Link
          activeClass="active"
          to="/Project"
          className={`ListItem ${activeNav === "/Project" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          PROJECTS{" "}
        </Link>
        <Link
          activeClass="active"
          to="/Certificate"
          className={`ListItem ${activeNav === "/Certificate" ? "active" : ""}`}
          onClick={() => setShowMenu(false)}
        >
          CERTIFICATE{" "}
        </Link>
        <Link
          activeClass="active"
          to="/Contact"
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
