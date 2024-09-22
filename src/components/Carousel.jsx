// import React, { useEffect } from "react";
// import { imgCarousel } from "../data/carousel";
// import { carouselDragging } from "../function/carouselDrag";

// const Carousel = () => {
//   useEffect(() => {
//     const cleanup = carouselDragging();
//     return () => {
//       if (cleanup) cleanup();
//     };
//   }, []);

//   return (
//     <section className="section-carousel">
//       <div className="wrapper-carousel">
//         <i id="left" className="fa-solid fa-angle-left"></i>
//         <ul className="carousel">
//           {imgCarousel.map((item, index) => (
//             <li key={index} className="card">
//               <img
//                 src={item.img}
//                 alt={`Image ${index + 1}`}
//                 draggable="false"
//               />
//             </li>
//           ))}
//         </ul>
//         <i id="right" className="fa-solid fa-angle-right"></i>
//       </div>
//     </section>
//   );
// };

// export default Carousel;

import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { imgCarousel } from "../data/carousel";

const Carousel = () => {
  useEffect(() => {
    // Si vous avez besoin d'initialiser quelque chose ou d'ajouter des effets secondaires
  }, []);

  return (
    <section className="section">
      <div className="wrapper-carousel">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            focus: "center",
            gap: "1rem",
            pagination: false,
            arrows: true,
            drag: true,
            snap: false,
          }}
        >
          {imgCarousel.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item.img} alt={`Image ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;
