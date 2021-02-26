// Constants
import { posterPath } from "../../config/config";

// Components
import { createElement } from "../atoms/element";
import { getInfoProvider } from "../molecules/provider";
import { createArticle } from "../molecules/article1";
import { createSecondArticle } from "../molecules/article2";

export const createOverview = (data, providers) => {
  // Create the total element:
  const section = createElement("section");

  // Create all the html elements:
  const poster = createElement("img", {
    src: `${posterPath}${data.poster_path}`,
    alt: `Poster of the movie: ${data.original_title}`,
  });

  const article = createArticle(data);
  const article2 = createSecondArticle(data);

  let ul;
  if (providers) {
    ul = getInfoProvider(providers);
  } else {
    ul = "";
  }
  article.append(ul);

  // Adding to the element:
  section.append(article);
  section.append(poster);
  section.append(article2);
  return section;
};
