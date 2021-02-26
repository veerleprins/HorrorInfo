// Components
import { createElement } from "../atoms/element";
import { createList } from "../molecules/list";

export const createOverview = (data) => {
  // Creating the elements:
  const main = createElement("main");
  const section = createElement("section");
  const subtitle = createElement("h2", {}, "Discover horrors: ");
  const ul = createList(data);

  // Appends the elements:
  section.appendChild(subtitle);
  section.appendChild(ul);
  main.appendChild(section);
  return main;
};
