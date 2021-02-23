// Internals
import { posterPath } from "../../config/config";

// Components
import { textElement } from "../atoms/text";
import { imgLink } from "../molecules/img-link";

export const createOverview = (data) => {
  // Creating the elements:
  const elements = create(["main", "section", "ul"]);
  const subtitle = textElement("h2", "Discover horrors: ");

  // Created all the list items:
  data.forEach((movie) => {
    let li = document.createElement("li");
    let title = textElement("h3", movie.title);
    let clickImg = imgLink(
      `/movie/${movie.id}`,
      `${posterPath}${movie.poster}`,
      `Poster of the movie: ${movie.title}`
    );

    li.appendChild(title);
    li.appendChild(clickImg);
    elements[2].appendChild(li);
  });

  // Appends the elements:
  elements[1].appendChild(subtitle);
  elements[1].appendChild(elements[2]);
  elements[0].appendChild(elements[1]);
  return elements[0];
};

const create = (elementArray) => {
  return elementArray.map((element) => {
    return document.createElement(element);
  });
};
