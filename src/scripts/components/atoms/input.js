// Components:
import { textElement } from "./text";

export const inputElement = (tag, text, placeText) => {
  const input = document.createElement("input");
  const button = document.createElement("button");
  const article = document.createElement("article");
  const div = document.createElement("div");
  const title = textElement(tag, text);
  input.setAttribute("placeholder", placeText);
  input.setAttribute("type", "text");
  article.appendChild(title);
  article.appendChild(div);
  div.appendChild(input);
  div.appendChild(button);
  return article;
};
