// Internals
const netflixURL = require("../../../images/netflix.svg");
const itunesURL = require("../../../images/apple-itunes.svg");
const patheURL = require("../../../images/pathé-thuis.svg");

// Components
import { createElement } from "../atoms/element";
import { createTumbnail } from "./thumbnail";

export const getInfoProvider = (providers) => {
  // This function builds a specific ul showing the
  // providers of the detail page:
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
        let link = createTumbnail(hrefList[index], logo, `Logo of ${provider}`);
        link.setAttribute("target", "_blank");
        li.appendChild(link);
        ul.appendChild(li);
      }
    });
  });
  return ul;
};
