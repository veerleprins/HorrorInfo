// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";

export const createSecondArticle = (data) => {
  const article = createElement("article");
  const h3List = createListElements(
    ["Voting:", "Vote count:", "Status:", "Release date:"],
    "h3"
  );
  const pList = createListElements(
    [data.vote_average, data.vote_count, data.status, data.release_date],
    "p"
  );

  const mark = createElement("p", { class: "vote" }, data.vote_average);

  appendToElement([h3List[0], mark, h3List[1], pList[1]], article);
  appendToElement([h3List[2], pList[2], h3List[3], pList[3]], article);

  return article;
};

const createListElements = (dataArray, tag) => {
  return dataArray.map((text) => {
    return createElement(tag, {}, text);
  });
};
