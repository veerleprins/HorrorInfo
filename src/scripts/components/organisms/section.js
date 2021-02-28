// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createList } from "../molecules/list";

export const createSection = (data, sectionTitle) => {
  // Create the elements:
  const section = createElement("section");
  const title = createElement("h2", {}, sectionTitle);
  const ul = createList(data);

  // Appending the elements:
  appendToElement([title, ul], section);
  return section;
};
