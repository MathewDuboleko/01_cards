const cards = document.querySelectorAll(".card");

for (const card of cards) {
  card.addEventListener("click", () => {
    clearActiveClasses();

    card.classList.add("active__card");
  });
}

function clearActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active__card");
  });
}
