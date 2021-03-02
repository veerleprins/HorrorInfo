// Modules
import { appendToElement } from "../../modules/helpers/append";
import { createListElements } from "../../modules/helpers/elements";

// Components
import { createElement } from "../atoms/element";

export const createSecondArticle = (data) => {
  // This function creates the second article on the
  // detail page:
  const article = createElement("article");
  const mark = createElement("p", { class: "vote" }, data.vote_average);
  const h3List = createListElements(
    ["Voting:", "Vote count:", "Status:", "Release date:"],
    "h3"
  );
  const pList = createListElements(
    [data.vote_average, data.vote_count, data.status, data.release_date],
    "p"
  );
  const divList = createListElements(["", "", "", ""], "div");

  appendToElement([h3List[0], mark], divList[0]);
  appendToElement([h3List[1], pList[1]], divList[1]);
  appendToElement([h3List[2], pList[2]], divList[2]);
  appendToElement([h3List[3], pList[3]], divList[3]);

  appendToElement([divList[0], divList[1], divList[2], divList[3]], article);

  return article;
};
