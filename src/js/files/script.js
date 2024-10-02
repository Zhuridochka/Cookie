// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  // let keypressActions = (e) => {
  //   if (e.key === "Escape") {
  //     document.documentElement.classList.remove("catalog-open");
  //   }
  // };

  //* Додавання классу .search-open до тегу <head>
  let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;
  };

  //* Функція для додавання від'ємного margin до блогу .presentation
  function updateHeightObjectPaddingBlock() {
    const presentation = document.querySelector(".presentation");
    if (!presentation) return;

    const presentationHeight = presentation.offsetHeight;
    const halfPresentationHeight = presentationHeight / 2;
    const hero = document.querySelectorAll(".hero");

    if (hero.length > 0) {
      presentation.style.marginBlockStart = `${-halfPresentationHeight}px`;
    }
  }
  updateHeightObjectPaddingBlock();
}
