// Atoms
import { createElement } from "../../components/atoms/element";

export const errorState = () => {
  const main = document.querySelector("main");
  const section = createError();
  main.append(section);
};

const createError = () => {
  const section = createElement("section", { class: "error" });
  const h3 = createElement("h3", {}, "Loading the horror movies failed!");
  const p = createElement(
    "p",
    {},
    "Looks like something went wrong while getting the horror movies... "
  );
  section.append(h3);
  section.append(p);
  return section;
};
