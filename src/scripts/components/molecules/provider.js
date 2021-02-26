// Components
import { createElement } from "../atoms/element";

export const getInfoProvider = (providers) => {
  // Getting all the logo's:
  const netflix = require("../../../images/netflix.svg");
  const itunesURL = require("../../../images/apple-itunes.svg");
  const patheURL = require("../../../images/pathé-thuis.svg");
  const logoList = [netflix, itunesURL, patheURL];

  // Creating the ul:
  const ul = createElement("ul");

  providers.forEach((provider) => {
    logoList.forEach((logo) => {
      if (logo.includes(provider)) {
        let li = createElement("li");
        let img = createElement("img", {
          src: logo,
          alt: `Logo of ${provider}`,
        });
        li.appendChild(img);
        ul.appendChild(li);
      }
    });
  });
  return ul;
};
