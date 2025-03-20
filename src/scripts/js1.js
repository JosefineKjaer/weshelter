export function initFlipCardsOne() {
  document.querySelectorAll(".card-container1").forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
      cardContainer.querySelector(".card").classList.toggle("flipped");
    });
  });
}
