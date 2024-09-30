import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const TextAnimation = () => {
  const [visible, setVisible] = useState(true); // État pour gérer la visibilité

  useEffect(() => {
    // Initialiser SplitType
    const myText = new SplitType("#my-text");
    
    // Sélectionner la section intro-slider
    const introSection = document.querySelector("#intro-slider");

    // Commencer par rendre la section visible
    gsap.set(introSection, { opacity: 1 });

    // Animer avec GSAP
    gsap.fromTo(
      ".char",
      {
        y: 115,  // Commence à partir de 115px vers le bas
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        onComplete: () => {
          // Animation de sortie après un léger délai
          gsap.to(".char", {
            y: -115, // Sort vers le haut
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            delay: 1,
            ease: "power2.inOut",
            onComplete: () => {
              // Faire disparaître le fond avec un fade out
              gsap.to(introSection, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => setVisible(false), // Masquer le composant après l'animation
              });
            },
          });
        },
      }
    );

    // Nettoyage à la fin
    return () => {
      myText.revert(); // Revenir à l'état d'origine
    };
  }, []);

  // Rendre conditionnellement le composant
  return visible ? (
    <section id="intro-slider" className="intro-section">
      <h1 id="my-text">Bougado Gaboudo</h1>
    </section>
  ) : null;
};

export default TextAnimation;
