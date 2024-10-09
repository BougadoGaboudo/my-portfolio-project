import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import ContentHome from "../components/ContentHome";

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
      <div className="line-section"></div>
      <Carousel />
      <div className="line-section"></div>
      <ContentHome
        part={"illu-part"}
        bgColor={"dark"}
        title={"Hi, I'm Bougado !"}
        text={
          <>
            <br />

            Illustration is my passion ! I've dedicated four years to studying
            illustration seriously. During that time, I was doing a personal
            challenge I called "Road to be an Artist", where I drew every single
            day.
            <br />
            Even though I do it as a hobby, my goal is to reach a professional
            level ! ( •̀ω •́ゞ)
            <br />
            <br />
            And I also like coding ! I started learning it in 2023, right after my illustration period. It enables me to showcase my work and share what I've done along my studies. d(´▽｀*)
          </>
        }
        img1={"/img/raidenfanart.jpg"}
      />

      <hr />
      <Footer />
    </>
  );
};

export default Home;
