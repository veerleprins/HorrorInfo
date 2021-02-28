// Modules
import { appendToElement } from "../../modules/appending/append";

// Components
import { createElement } from "../atoms/element";

export const createSecondArticle = (data) => {
  const article = createElement("article");

  const firth3 = createElement("h3", {}, "Voting:");
  const mark = createElement("p", { class: "vote" }, data.vote_average);
  const secondh3 = createElement("h3", {}, "Vote count:");
  const count = createElement("p", {}, data.vote_count);
  const thirdh3 = createElement("h3", {}, "Status:");
  const status = createElement("p", {}, data.status);
  const lasth3 = createElement("h3", {}, "Release date:");
  const release = createElement("p", {}, data.release_date);

  appendToElement(
    [firth3, mark, secondh3, count, thirdh3, status, lasth3, release],
    article
  );

  return article;
};
