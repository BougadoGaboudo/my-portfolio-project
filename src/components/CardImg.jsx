import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { imgGallery } from "../data/gallery";
import imagesLoaded from "imagesloaded";

const CardImg = () => {
  const gridRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const images = document.querySelectorAll(".article-image");
    images.forEach((image) => {
      const imageItem = image.querySelector("img");
      const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
      image.style.paddingBottom = `${padding}%`;
      imageItem.classList.add("init");
    });

    const itemsGrid = new Isotope(gridRef.current, {
      itemSelector: ".article",
      masonry: {
        fitWidth: true,
        gutter: 20,
      },
    });

    imagesLoaded(gridRef.current, () => {
      itemsGrid.layout();
    });

    const documentActions = (e) => {
      const targetElement = e.target;
      if (targetElement.closest(".filter-articles-item")) {
        const filterItem = targetElement.closest(".filter-articles-item");
        const filterValue = filterItem.dataset.filter;
        const filterActiveItem = document.querySelector(
          ".filter-articles-item.active"
        );

        itemsGrid.arrange({
          filter: filterValue === "*" ? "" : `[data-filter="${filterValue}"]`,
        });

        filterActiveItem.classList.remove("active");
        filterItem.classList.add("active");

        e.preventDefault();
      }
    };

    document.addEventListener("click", documentActions);

    return () => {
      document.removeEventListener("click", documentActions);
      itemsGrid.destroy();
    };
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden"; // Désactiver le défilement

      if (closeBtnRef.current) {
        closeBtnRef.current.focus(); // Focus the close button when lightbox opens
      }

      const focusableElements =
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
      const modal = document.querySelector(".lightbox");
      const firstFocusableElement =
        modal.querySelectorAll(focusableElements)[0];
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1];

      const handleTab = (e) => {
        const isTabPressed = e.key === "Tab" || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus(); // Loop back to the last element
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus(); // Loop back to the first element
            e.preventDefault();
          }
        }
      };

      modal.addEventListener("keydown", handleTab);

      return () => {
        modal.removeEventListener("keydown", handleTab);
        document.body.style.overflow = ""; // Réactiver le défilement
      };
    }
  }, [selectedImageIndex]);

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : imgGallery.length - 1;
      return newIndex;
    });
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex < imgGallery.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
  };

  return (
    <main>
      <section className="articles">
        <div className="articles-container">
          <h1 className="articles-title">Artworks</h1>
          <div className="articles-filter filter-articles">
            <button
              data-filter="*"
              className="filter-articles-item active"
              type="button"
            >
              Show all
            </button>
            <button
              data-filter="original"
              className="filter-articles-item"
              type="button"
            >
              Original
            </button>
            <button
              data-filter="fanart"
              className="filter-articles-item"
              type="button"
            >
              Fanart
            </button>
            <button
              data-filter="study"
              className="filter-articles-item"
              type="button"
            >
              Study
            </button>
          </div>
          <div className="articles-items" ref={gridRef}>
            {imgGallery.map((image, index) => (
              <article
                data-filter={image.type}
                className={`${image.style} article`}
                key={index}
              >
                <div
                  className="article-image"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image.img} alt={image.title} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {selectedImageIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <button
              ref={closeBtnRef}
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img
              className="lightbox-content"
              src={imgGallery[selectedImageIndex].img}
              alt="Large"
            />
            <button className="lightbox-prev" onClick={showPrevImage}>
              &#10094;
            </button>
            <button className="lightbox-next" onClick={showNextImage}>
              &#10095;
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default CardImg;
