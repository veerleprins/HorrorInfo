// Components:
import { imgElement } from "../atoms/img";

export const imgLink = (url, imgPath, alt) => {
  const link = document.createElement("a");
  const img = imgElement(alt, imgPath);
  link.setAttribute("href", url);
  link.appendChild(img);
  return link;
};
