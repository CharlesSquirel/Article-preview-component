// POBRANIE DOM
const shareIconCard = document.querySelector(".icon-card");
const shareIconPopup = document.querySelector(".icon-popup");
const popup = document.querySelector(".author__popup");

// FUNKCJE TOOGLE
const toogleMenuDesktop = () => {
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
};

const toogleMenuMobile = () => {
  popup.style.display = "none";
};

//LISTENERS
shareIconCard.addEventListener("click", toogleMenuDesktop);
shareIconPopup.addEventListener("click", toogleMenuMobile);
