import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}
        >
          <img src="/img/NewLogo.png" alt="Logo" height={88} />
        </NavLink>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "cross" : ""}`}></span>
          <span className={`bar ${isOpen ? "cross" : ""}`}></span>
          <span className={`bar ${isOpen ? "cross" : ""}`}></span>
        </div>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
