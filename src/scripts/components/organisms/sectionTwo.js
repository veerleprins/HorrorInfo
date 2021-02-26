// Constants
import { posterPath } from "../../config/config";

// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "../molecules/img-link";

export const createSection = (data) => {
  const section = createElement("section");

  const title = createElement("h2", {}, "Recommendations:");
  const ul = createElement("ul");

  data.forEach((element) => {
    const li = createElement("li");
    const link = createClickableIMG(
      "#",
      `${posterPath}${element.poster}`,
      `Poster of the movie: ${element.title}`
    );
    li.appendChild(link);
    ul.appendChild(li);
  });

  section.appendChild(title);
  section.appendChild(ul);

  return section;
};
