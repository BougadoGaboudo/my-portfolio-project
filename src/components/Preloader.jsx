import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          stagger: 1, // c'est l'intervalle de tps pour que le prochain titre apparaisse
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="preloader-wrapper" ref={comp}>
      <section id="intro-slider" className="preloader-section first-part">
        <h1 id="title-1">Illustration is my passion !</h1>
        <h1 id="title-2">But I also like coding !</h1>
      </section>
      {/* <section className="preloader-section">
        <h1>Bienvenue.</h1>
      </section> */}
    </div>
  );
};

export default Preloader;
