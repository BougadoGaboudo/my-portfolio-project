import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TextAnimation from "./components/TextAnimation";

function App() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (animationFinished) {
      setContentVisible(true);
    }
  }, [animationFinished]);

  return (
    <BrowserRouter>
      <TextAnimation onComplete={() => setAnimationFinished(true)} />
      <div className={`page-content ${contentVisible ? "visible" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
