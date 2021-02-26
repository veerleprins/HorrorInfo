// Constants
import { posterPath } from "../../config/config";

// Modules
import { textElement } from "../atoms/text";

// Components
import { imgLink } from "../molecules/img-link";

export const createSection = (data) => {
  const section = document.createElement("section");
  const title = textElement("h2", "Recommendations:");
  const ul = document.createElement("ul");

  data.forEach((element) => {
    const li = document.createElement("li");
    const link = imgLink(
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
