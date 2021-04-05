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
  const p = createElement("p", {}, "Loading the horror data...");
  section.append(p);
  return section;
};
