// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createList } from "../molecules/list";

export const createSection = (data, sectionTitle) => {
  // This function builds a section of the page and
  // returns the section element:
  const section = createElement("section");
  const title = createElement("h2", {}, sectionTitle);
  const ul = createList(data, { class: "movies" });

  // Appending the elements:
  appendToElement([title, ul], section);
  return section;
};
