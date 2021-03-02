// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";

export const createInput = (tag, text, placeText) => {
  // This function builds an input field within an article:
  // Creating the elements
  const article = createElement("article");
  const div = createElement("div", { class: "inputDiv" });
  const title = createElement(tag, {}, text);
  const input = createElement("input", {
    placeholder: placeText,
    type: "text",
  });

  // Appending the elements:
  appendToElement([title, div], article);
  appendToElement([input], div);
  return article;
};
