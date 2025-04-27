import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardImg from "../components/CardImg";

const Gallery = () => {
  const [isGalleryMounted, setIsGalleryMounted] = useState(false);

  useEffect(() => {
    setIsGalleryMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <hr />
      <CardImg isVisible={isGalleryMounted} />
      <hr />
      <Footer />
      {/* <script src="/src/function/gallery.js"></script> */}
    </>
  );
};

export default Gallery;
