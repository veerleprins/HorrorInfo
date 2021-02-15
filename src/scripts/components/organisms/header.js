// Internals:
// const mdbLogo = require("../../../images/TheMovieDB-AltLong.svg");

// Components:
// import { imgLink } from "../molecules/img-link";
import { textElement } from "../atoms/text";

export const createHeader = () => {
  const header = document.createElement("header");
  const title = textElement("h1", "Welke horror film?");

  // Wat moet er in?
  // - Logo -> img link

  header.appendChild(title);
  return header;
};
