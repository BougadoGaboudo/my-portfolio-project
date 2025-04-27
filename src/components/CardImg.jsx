import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { imgGallery } from "../data/gallery";
import imagesLoaded from "imagesloaded";

const CardImg = ({ isVisible = true }) => {
  const gridRef = useRef(null);
  const isotopeRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imagesReady, setImagesReady] = useState(false);

  // Initialisation et nettoyage d'Isotope
  useEffect(() => {
    // Ne rien faire si le composant n'est pas visible ou si gridRef n'existe pas
    if (!isVisible || !gridRef.current) return;

    // Fonction pour initialiser Isotope
    const initIsotope = () => {
      // Calcul des dimensions des images
      const images = document.querySelectorAll(".article-image");
      images.forEach((image) => {
        const imageItem = image.querySelector("img");
        if (imageItem && imageItem.complete) {
          const padding =
            (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
          image.style.paddingBottom = `${padding}%`;
          imageItem.classList.add("init");
        }
      });

      // Initialisation d'Isotope avec un layout en grille plutôt qu'en masonry
      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: ".article",
        masonry: {
          fitWidth: true,
          gutter: 20,
          columnWidth: ".article",
        },
        transitionDuration: "0.4s",
      });

      // Utiliser imagesLoaded pour s'assurer que toutes les images sont chargées
      imagesLoaded(gridRef.current, () => {
        // Une fois les images chargées, recalculer leurs dimensions
        images.forEach((image) => {
          const imageItem = image.querySelector("img");
          if (imageItem) {
            const padding =
              (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
            image.style.paddingBottom = `${padding}%`;
            imageItem.classList.add("init");
          }
        });

        // Réarranger complètement la mise en page
        if (isotopeRef.current) {
          isotopeRef.current.arrange();

          // Pour être absolument sûr, relancer après un court délai
          setTimeout(() => {
            if (isotopeRef.current) {
              isotopeRef.current.arrange();
            }
          }, 100);
        }

        setImagesReady(true);
      });
    };

    // Initialiser Isotope
    initIsotope();

    // Ajouter un événement de redimensionnement pour recalculer la mise en page
    const handleResize = () => {
      if (isotopeRef.current) {
        isotopeRef.current.arrange();
      }
    };

    window.addEventListener("resize", handleResize);

    // Gestion des clics pour le filtrage
    const documentActions = (e) => {
      const targetElement = e.target;
      if (targetElement.closest(".filter-articles-item")) {
        const filterItem = targetElement.closest(".filter-articles-item");
        const filterValue = filterItem.dataset.filter;
        const filterActiveItem = document.querySelector(
          ".filter-articles-item.active"
        );

        if (isotopeRef.current) {
          isotopeRef.current.arrange({
            filter: filterValue === "*" ? "" : `[data-filter="${filterValue}"]`,
          });
        }

        if (filterActiveItem) {
          filterActiveItem.classList.remove("active");
        }
        filterItem.classList.add("active");

        e.preventDefault();
      }
    };

    document.addEventListener("click", documentActions);

    // Nettoyage
    return () => {
      document.removeEventListener("click", documentActions);
      window.removeEventListener("resize", handleResize);
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
        isotopeRef.current = null;
      }
    };
  }, [isVisible]); // Relance l'effet si la visibilité change

  // Effet secondaire lorsque les images sont prêtes pour forcer un réarrangement
  useEffect(() => {
    if (imagesReady && isotopeRef.current) {
      // Forcer un réarrangement après que tout soit prêt
      isotopeRef.current.arrange();
    }
  }, [imagesReady]);

  // Gestion du lightbox
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden"; // Désactiver le scroll vertical

      const focusableElements =
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
      const modal = document.querySelector(".lightbox");
      if (!modal) return;

      const firstFocusableElement =
        modal.querySelectorAll(focusableElements)[0];
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1];

      // Essayer de mettre le focus sur le bouton de fermeture
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }

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
        document.body.style.overflow = ""; // Réactiver le scroll vertical
      };
    }
  }, [selectedImageIndex]);

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : imgGallery.length - 1;
      return newIndex;
    });
  };

  const showNextImage = (e) => {
    e.stopPropagation();
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
          <div
            className={`articles-items ${imagesReady ? "images-ready" : ""}`}
            ref={gridRef}
          >
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
                  <img
                    src={image.img}
                    alt={image.title}
                    onLoad={() => {
                      if (isotopeRef.current) {
                        isotopeRef.current.arrange();
                      }
                    }}
                  />
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
