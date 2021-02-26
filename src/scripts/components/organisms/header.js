// Components
import { inputElement } from "../atoms/input";

export const createHeader = () => {
  const header = document.createElement("header");
  const article = inputElement(
    "h1",
    "What horror are you looking for?",
    "Search movies..."
  );

  header.appendChild(article);
  return header;
};
