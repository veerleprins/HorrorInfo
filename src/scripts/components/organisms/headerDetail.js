// Components
import { textElement } from "../atoms/text";

export const createHeader = (movieTitle) => {
  const header = document.createElement("header");
  const title = textElement("h1", movieTitle);
  header.appendChild(title);
  return header;
};
