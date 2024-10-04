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

  //* Функція для додавання від'ємного margin до блоку .presentation
  function updateHeightObjectPaddingBlock() {
    const presentations = document.querySelectorAll(".presentation");
    presentations.forEach((presentation) => {
      if (!presentation) return;
      const presentationHeight = presentation.offsetHeight;
      const halfPresentationHeight = presentationHeight / 2;
      const hero = document.querySelectorAll(".hero");
      const collection = document.querySelector(".collection");

      if (hero) {
        presentation.style.top = `${-halfPresentationHeight}px`;
      }
      if (collection) {
        presentation.style.top = `${-halfPresentationHeight}px`;
      }
    });
  }
  updateHeightObjectPaddingBlock();

  // Визначення висоти Header
  function updateHeaderHeight() {
    const header = document.querySelector(".header");
    if (!header) return;
    const headerHeight = header.offsetHeight;
    const allMainElements = document.querySelectorAll("main");

    allMainElements.forEach((main) => {
      main.style.paddingBlockStart = `${headerHeight}px`;
    });
  }
  updateHeaderHeight();

  //* Функція для зміни data-атрибуту data-scroll в Header
  function updateDataAttributeBasedOnHeight() {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    if (!header) return;
    header.setAttribute("data-scroll", headerHeight);
  }
  updateDataAttributeBasedOnHeight();

  //*Функція для зміни inset-block-end у зображення
  function updateMainImage() {
    const imageBg = document.querySelector(".top-main__image-bg");
    if (!imageBg) return;
    const imageBgHeight = imageBg.offsetHeight;
    const twentyPercentHeight = imageBgHeight * 0.2;

    imageBg.style.insetBlockEnd = `-${twentyPercentHeight}px`;
  }
  updateMainImage();
}
