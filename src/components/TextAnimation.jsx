import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const TextAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Initialiser SplitType
    const myText = new SplitType("#my-text");

    // Animer avec GSAP
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
      onComplete: () => {
        // Animation txt terminée -> Animation slide vers le bas pour cacher le component
        gsap.to("#intro-slider", {
          yPercent: 100,
          duration: 1.5,
          delay: 1,
          ease: "power2.inOut",
          onComplete: () => setVisible(false),
        });
      },
    });

    // Nettoyage à la fin
    return () => {
      myText.revert(); // Revenir à l'état d'origine
    };
  }, []);

  return visible ? (
    <section id="intro-slider" className="intro-section">
      <h1 id="my-text">Bougado Gaboudo</h1>
    </section>
  ) : null;
};

export default TextAnimation;
