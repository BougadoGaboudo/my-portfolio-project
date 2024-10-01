import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import TextAnimation from "./components/TextAnimation";

function App() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  // Gérer l'état d'animation
  const handleAnimationComplete = () => {
    setIsAnimationDone(true);
  };

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      {!isAnimationDone ? (
        <TextAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
