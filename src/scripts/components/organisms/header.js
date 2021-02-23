// Components
import { inputElement } from "../atoms/input";

export const createHeader = () => {
  const header = document.createElement("header");
  const article = inputElement("h1", "Welke horror film?", "Search movies...");

  header.appendChild(article);
  return header;
};
