import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  const images = [
    "https://via.placeholder.com/600x300?text=Image+1",
    "https://via.placeholder.com/600x300?text=Image+2",
    "https://via.placeholder.com/600x300?text=Image+3",
  ];
  return (
    <>
      <Navbar />
      <HeroArea bg={"home-bg"} page={"home"} />
      <Carousel />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
