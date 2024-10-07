import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Home = ({ animationFinished }) => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      {animationFinished && (
        <div className="home-desktop">
          <HeroArea bg={"home-bg"} page={"home"} />
        </div>
      )}
      <Carousel />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
