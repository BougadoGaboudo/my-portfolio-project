import React, { useEffect, useRef } from "react";
import { imgGallery } from "../data/gallery";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

const CardImg = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: ".article",
      layoutMode: "masonry",
      masonry: {
        fitWidth: true,
        gutter: 20,
      },
    });

    imagesLoaded(gridRef.current, () => {
      iso.layout();
    });

    const filterButtons = document.querySelectorAll(".button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = button.getAttribute("data-filter");
        iso.arrange({
          filter:
            filterValue === "*" ? "*" : `[data-category="${filterValue}"]`,
        });

        document.querySelector(".is-checked").classList.remove("is-checked");
        button.classList.add("is-checked");
      });
    });

    return () => {
      iso.destroy();
    };
  }, []);

  return (
    // <section className="gallery-section">
    //   <h1 className="gallery-h1">Artworks</h1>

    //   <div className="button-grp" id="filters">
    //     <button className="button is-checked" data-filter="*">
    //       Show all
    //     </button>
    //     <button className="button" data-filter="original">
    //       Original
    //     </button>
    //     <button className="button" data-filter="fanart">
    //       Fanart
    //     </button>
    //     <button className="button" data-filter="study">
    //       Study
    //     </button>
    //   </div>

    //   <div className="grid-gallery" ref={gridRef}>
    //     {imgGallery.map((image, index) => (
    //       <div className={`grid-item ${image.style}`} data-category={image.type} key={index}>
    //         <img src={image.img} alt={image.title} />
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section class="articles">
      <div class="articles-container">
        <h1 class="articles-title">Artworks</h1>
        <div className="button-grp" id="filters">
          <button className="button is-checked" data-filter="*">
            Show all
          </button>
          <button className="button" data-filter="original">
            Original
          </button>
          <button className="button" data-filter="fanart">
            Fanart
          </button>
          <button className="button" data-filter="study">
            Study
          </button>
        </div>

        <div className="articles-items">
          {imgGallery.map((image, index) => (
            <article
              data-category={image.type}
              className={`articles-item article ${image.style || ''}`}
            >
              <a href={image.url} className="article-image">
                <img src={image.img} alt={image.title} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardImg;
