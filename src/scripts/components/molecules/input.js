// Components
import { createElement } from "../atoms/element";

export const inputElement = (tag, text, placeText) => {
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
  article.appendChild(title);
  article.appendChild(div);
  div.appendChild(input);
  div.appendChild(button);
  return article;
};
