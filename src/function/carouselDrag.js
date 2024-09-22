// export const carouselDragging = () => {
//   const carousel = document.querySelector(".carousel");
//   const arrowBtns = document.querySelectorAll(".wrapper-carousel i");

//   // Initialize carousel by duplicating cards for infinite scroll
//   const initializeCarousel = () => {
//     const cards = [...carousel.querySelectorAll(".card")];
//     const firstCardWidth = cards[0].offsetWidth;
//     const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//     // Insert copies of the last few cards to the beginning
//     cards
//       .slice(-cardPerView)
//       .reverse()
//       .forEach((card) => {
//         carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//       });

//     // Insert copies of the first few cards to the end
//     cards.slice(0, cardPerView).forEach((card) => {
//       carousel.insertAdjacentHTML("beforeend", card.outerHTML);
//     });

//     // Reset scroll position to the middle
//     carousel.scrollLeft = cardPerView * firstCardWidth;
//   };

//   initializeCarousel();

//   let isDragging = false;
//   let startX, startScrollLeft;

//   const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
//   };

//   const dragging = (e) => {
//     if (!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
//   };

//   const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
//     infiniteScroll();
//   };

//   const infiniteScroll = () => {
//     const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

//     // Use requestAnimationFrame to adjust scroll position smoothly
//     requestAnimationFrame(() => {
//       if (carousel.scrollLeft <= 0) {
//         carousel.classList.add("no-transition");

//         carousel.scrollLeft = maxScrollLeft - 1;
//         carousel.classList.remove("no-transition");
//       } else if (carousel.scrollLeft >= maxScrollLeft) {
//         carousel.classList.add("no-transition");

//         carousel.scrollLeft = 1;
//         carousel.classList.remove("no-transition");
//       }
//     });
//   };

//   // Add event listeners for arrow buttons
//   arrowBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const firstCardWidth = carousel.querySelector(".card").offsetWidth;
//       carousel.scrollLeft +=
//         btn.id === "left" ? -firstCardWidth : firstCardWidth;
//     });
//   });

//   // Add event listeners for dragging
//   carousel.addEventListener("mousedown", dragStart);
//   carousel.addEventListener("mousemove", dragging);
//   document.addEventListener("mouseup", dragStop);
//   carousel.addEventListener("scroll", infiniteScroll);

//   // Clean up event listeners
//   return () => {
//     carousel.removeEventListener("mousedown", dragStart);
//     carousel.removeEventListener("mousemove", dragging);
//     document.removeEventListener("mouseup", dragStop);
//     carousel.removeEventListener("scroll", infiniteScroll);
//   };
// };

export const carouselDragging = () => {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper-carousel i");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const carouselChildrens = [...carousel.children];

  let isDragging = false,
    startX,
    startScrollLeft;

  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens
    .slice(0, cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the inital cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);

  return () => {
    carousel.removeEventListener("mousedown", dragStart);
    carousel.removeEventListener("mousemove", dragging);
    document.removeEventListener("mouseup", dragStop);
    carousel.removeEventListener("scroll", infiniteScroll);
  };
};

// export const setupDragging = () => {
//     const carousel = document.querySelector(".carousel");
//     if (!carousel) return;

//     let isDragging = false;
//     let startX;
//     let scrollLeft;

//     const dragStart = (e) => {
//       isDragging = true;
//       startX = e.pageX - carousel.offsetLeft;
//       scrollLeft = carousel.scrollLeft;
//       carousel.classList.add("dragging"); // Ajoute une classe si nécessaire
//     };

//     const dragEnd = () => {
//       isDragging = false;
//       carousel.classList.remove("dragging"); // Retire la classe si nécessaire
//     };

//     const dragging = (e) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       const x = e.pageX - carousel.offsetLeft;
//       const walk = (x - startX) * 2; // Ajustez le multiplicateur pour la sensibilité
//       carousel.scrollLeft = scrollLeft - walk;
//     };

//     // Ajoute les écouteurs d'événements
//     carousel.addEventListener("mousedown", dragStart);
//     carousel.addEventListener("mouseup", dragEnd);
//     carousel.addEventListener("mouseleave", dragEnd);
//     carousel.addEventListener("mousemove", dragging);

//     // Fonction de nettoyage pour retirer les événements
//     return () => {
//       carousel.removeEventListener("mousedown", dragStart);
//       carousel.removeEventListener("mouseup", dragEnd);
//       carousel.removeEventListener("mouseleave", dragEnd);
//       carousel.removeEventListener("mousemove", dragging);
//     };
//   };
