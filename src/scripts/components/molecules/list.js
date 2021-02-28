// Internals
import { posterPath } from "../../config/config";

// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "./img-link";

export const createList = (dataArray) => {
  const ul = createElement("ul");

  dataArray.forEach((item) => {
    // Creating elements
    const li = createElement("li");
    const title = createElement("h3", {}, item.title);
    const link = createClickableIMG(
      `/movie/${item.id}`,
      `${posterPath}${item.poster}`,
      `Poster of the movie: ${item.title}`
    );

    // Appending elements
    appendToElement([title, link], li);
    appendToElement([li], ul);
  });
  return ul;
};
