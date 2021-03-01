// Internals
import { posterPath } from "../../config/config";

// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "./thumbnail";

export const createList = (dataArray) => {
  const ul = createElement("ul");

  dataArray.forEach((item) => {
    // Creating elements
    const li = createElement("li");
    const link = createClickableIMG(
      `/movie/${item.id}`,
      `${posterPath}${item.poster}`,
      `Poster of the movie: ${item.title}`,
      item.title
    );

    // Appending elements
    appendToElement([link], li);
    appendToElement([li], ul);
  });
  return ul;
};
