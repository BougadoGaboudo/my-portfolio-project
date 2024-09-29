import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <HeroArea bg={"home-bg"} page={"home"} />
      <Carousel />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
