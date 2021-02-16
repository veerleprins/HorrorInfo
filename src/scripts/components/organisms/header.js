// Internals:
// const mdbLogo = require("../../../images/TheMovieDB-AltLong.svg");

// Components:
// import { imgLink } from "../molecules/img-link";
import { inputElement } from "../atoms/input";

export const createHeader = () => {
  const header = document.createElement("header");
  const article = inputElement(
    "h1",
    "Welke horror film wil je kijken?",
    "Search movies..."
  );

  // Wat moet er in?
  // - Logo -> img link

  header.appendChild(article);
  return header;
};
