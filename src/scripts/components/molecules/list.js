// Internals
import { posterPath } from "../../config/config";

// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "./img-link";

export const createList = (dataArray) => {
  const ul = createElement("ul");
  dataArray.forEach((item) => {
    // Creating elements
    let li = createElement("li");
    let title = createElement("h3", {}, item.title);
    let link = createClickableIMG(
      `/movie/${item.id}`,
      `${posterPath}${item.poster}`,
      `Poster of the movie: ${item.title}`
    );

    // Appending elements
    li.append(title);
    li.append(link);
    ul.append(li);
  });
  return ul;
};
