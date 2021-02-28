// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "../molecules/img-link";

export const getInfoProvider = (providers) => {
  // Getting all the logo's:
  const netflixURL = require("../../../images/netflix.svg");
  const itunesURL = require("../../../images/apple-itunes.svg");
  const patheURL = require("../../../images/pathé-thuis.svg");

  const hrefList = [
    `https://www.netflix.com/`,
    `https://www.apple.com/nl/itunes/`,
    `https://www.pathe-thuis.nl/over-pathe-thuis`,
  ];

  // Creating the ul:
  const ul = createElement("ul");

  providers.forEach((provider) => {
    [netflixURL, itunesURL, patheURL].forEach((logo, index) => {
      if (logo.includes(provider)) {
        let li = createElement("li");
        let link = createClickableIMG(
          hrefList[index],
          logo,
          `Logo of ${provider}`
        );
        link.setAttribute("target", "_blank");
        li.appendChild(link);
        ul.appendChild(li);
      }
    });
  });
  return ul;
};
