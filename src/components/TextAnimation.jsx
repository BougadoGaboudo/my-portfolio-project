import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const TextAnimation = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // désac le scroll

    const myText = new SplitType("#my-text");
    const introSection = document.querySelector("#intro-slider");

    gsap.set(introSection, { opacity: 1 });

    gsap.fromTo(
      ".char",
      { y: 115, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        onComplete: () => {
          gsap.to(".char", {
            y: -115,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            delay: 1,
            ease: "power2.inOut",
            onComplete: () => {
              setVisible(false);
              onComplete();

              const timeoutId = setTimeout(() => {
                document.body.style.overflow = "auto";
              }, 100);

              // Nettoyage du setTimeout lors du démontage
              return () => clearTimeout(timeoutId);
            },
          });
        },
      }
    );

    return () => {
      myText.revert();
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return visible ? (
    <section id="intro-slider" className="intro-section">
      <h1 id="my-text">Bougado Gaboudo</h1>
    </section>
  ) : null;
};

export default TextAnimation;
