// Modules
import { appendToElement } from "../../modules/appending/append";

// Components
import { createElement } from "../atoms/element";

export const createArticle = (data) => {
  const article = createElement("article");
  const h2 = createElement("h2", {}, `"${data.tagline}"`);
  const h3 = createElement("h3", {}, "Description:");
  const text = createElement("p", {}, data.overview);
  const watch = createElement("h3", {}, "Watch on:");

  appendToElement([h2, h3, text, watch], article);

  return article;
};
