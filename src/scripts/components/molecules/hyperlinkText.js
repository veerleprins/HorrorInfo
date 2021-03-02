// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";

export const createLinkInText = (URL, name, className) => {
  // This function adds a link element to a paragraph
  // and returns the paragraph:
  const paragraph = createElement("p", { class: className });
  const link = createElement("a", { href: URL }, name);
  appendToElement([link], paragraph);
  return paragraph;
};
