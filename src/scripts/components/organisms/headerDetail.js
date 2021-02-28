// Components
import { createElement } from "../atoms/element";

export const createHeader = (movieTitle) => {
  const header = createElement("header");
  const title = createElement("h1", {}, movieTitle);
  const backButton = createElement(
    "a",
    { href: "/", "data-navigo": true },
    "Back"
  );
  header.appendChild(title);
  header.appendChild(backButton);
  return header;
};
