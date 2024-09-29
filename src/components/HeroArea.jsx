import React from "react";
import { NavLink } from "react-router-dom";

const HeroArea = ({ bg, page }) => {
  return (
    <section className={bg}>
      <div className={page}>
        <img src="/img/NewLogo.png" alt="Logo" />
        <h2>Illustrator . Character Design</h2>
        <h2 className="mbot">Front Developer . Webdesigner</h2>
        <NavLink to="/gallery" className="primary-btn">
          See my work
        </NavLink>
      </div>
    </section>
  );
};

export default HeroArea;
