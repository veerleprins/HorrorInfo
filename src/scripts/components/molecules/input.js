// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";

export const createInput = (tag, text, placeText) => {
  // Creating the elements
  const article = createElement("article");
  const button = createElement("button");
  const div = createElement("div");
  const title = createElement(tag, {}, text);
  const input = createElement("input", {
    placeholder: placeText,
    type: "text",
  });

  // Appending the elements:
  appendToElement([title, div], article);
  appendToElement([input, button], div);
  return article;
};
