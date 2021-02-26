// Components
import { imgElement } from "../atoms/img";

export const getInfoProvider = (providers) => {
  const netflix = require("../../../images/netflix.svg");
  const itunesURL = require("../../../images/apple-itunes.svg");
  const patheURL = require("../../../images/pathé-thuis.svg");
  const arr = [netflix, itunesURL, patheURL];

  const ul = document.createElement("ul");
  providers.forEach((provider) => {
    arr.forEach((logo) => {
      if (logo.includes(provider)) {
        let li = document.createElement("li");
        let img = imgElement(`Logo ${provider}`, logo);
        li.appendChild(img);
        ul.appendChild(li);
      }
    });
  });

  return ul;
};
