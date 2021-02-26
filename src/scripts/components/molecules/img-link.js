// Components:
import { createElement } from "../atoms/element";

export const createClickableIMG = (hrefURL, srcURL, altText) => {
  const img = createElement("img", { src: srcURL, alt: altText });
  const link = createElement("a", { href: hrefURL });
  link.append(img);
  return link;
};
