export function initFlipCards() {
  document.querySelectorAll(".card-container").forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
      cardContainer.querySelector(".card").classList.toggle("flipped");
    });
  });
}
