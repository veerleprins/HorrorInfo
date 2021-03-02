// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { getInfoProvider } from "../molecules/provider";

export const createArticle = (data, providers) => {
  // This feature builds the first article on the
  // detail page:
  const article = createElement("article");

  const h2 = createElement("h2", {}, `"${data.tagline}"`);
  const h3 = createElement("h3", {}, "Description:");
  const watch = createElement("h3", {}, "Watch on:");
  const text = createElement("p", {}, data.overview);
  const ul = getInfoProvider(providers);

  appendToElement([h2, h3, text, watch, ul], article);

  return article;
};
