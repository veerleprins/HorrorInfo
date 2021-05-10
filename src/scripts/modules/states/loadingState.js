// Atoms
import { createElement } from "../../components/atoms/element";

export const loadingState = (loading) => {
  const main = document.querySelector("main");
  if (loading) {
    const section = createLoading();
    main.append(section);
  } else {
    const section = document.querySelector(".loading");
    section.parentNode.removeChild(section);
  }
};

const createLoading = () => {
  const section = createElement("section", { class: "loading" });
  const p = createElement("p", {}, "Loading data...");
  const div = createElement("div", { class: "loader" });
  section.append(p);
  section.append(div);
  return section;
};

export const checkLoaded = (images) => {
  let imageCount = images.length - 1;
  let imagesLoaded = 0;

  for (let i = 0; i < imageCount; i++) {
    images[i].addEventListener("load", () => {
      imagesLoaded++;
      imagesLoaded === imageCount ? loadingState(false) : "";
    });
  }
};
