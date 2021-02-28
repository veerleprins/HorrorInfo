// Components
import { createInput } from "../molecules/input";
import { createElement } from "../atoms/element";

export const createHeader = () => {
  // This function builds the header of the home page:
  const header = createElement("header");
  const article = createInput(
    "h1",
    "What horror are you looking for?",
    "Search movies..."
  );

  header.appendChild(article);
  return header;
};
