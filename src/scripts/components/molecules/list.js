// Internals
import { posterPath } from "../../config/config";

// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createTumbnail } from "./thumbnail";

export const createList = (dataArray, ulObject, liObject) => {
  // This function builds an unordered list based on
  // received data:
  const ul = createElement("ul", ulObject);
  dataArray.forEach((item) => {
    const li = createElement("li", liObject);
    const link = createTumbnail(
      `/movie/${item.id}`,
      `${posterPath}${item.poster}`,
      `Poster of the movie: ${item.title}`,
      item.title,
      ""
    );

    // Appending elements
    appendToElement([link], li);
    appendToElement([li], ul);
  });
  return ul;
};
