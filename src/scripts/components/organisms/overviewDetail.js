// Constants
import { posterPath } from "../../config/config";

// Components
import { textElement } from "../atoms/text";
import { imgElement } from "../atoms/img";
import { getInfoProvider } from "../molecules/provider";

export const createOverview = (data, providers) => {
  const section = document.createElement("section");
  const article = document.createElement("article");
  const article2 = document.createElement("article");
  const h3 = textElement("h3", "Description:");
  const watch = textElement("h3", "Watch on:");

  const poster = imgElement(
    `Poster of the movie: ${data.original_title}`,
    `${posterPath}${data.poster_path}`
  );
  const h2 = textElement("h2", `"${data.tagline}"`);
  const text = textElement("p", data.overview);

  const firth3 = textElement("h3", "Voting");
  const mark = textElement("p", data.vote_average);
  mark.classList.add("vote");
  const secondh3 = textElement("h3", "Vote count");
  const count = textElement("p", data.vote_count);
  const thirdh3 = textElement("h3", "Status");
  const status = textElement("p", data.status);
  const lasth3 = textElement("h3", "Release date");
  const release = textElement("p", data.release_date);

  appending(
    [firth3, mark, secondh3, count, thirdh3, status, lasth3, release],
    article2
  );
  appending([h2, h3, text, watch], article);

  let ul;

  if (providers) {
    ul = getInfoProvider(providers);
  } else {
    ul = "";
  }

  article.append(ul);
  appending([article, poster, article2], section);
  return section;
};

const appending = (dataArray, item) => {
  dataArray.forEach((element) => {
    item.appendChild(element);
  });
};
