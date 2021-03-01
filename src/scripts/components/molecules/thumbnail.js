// Components
import { createElement } from "../atoms/element";

export const createClickableIMG = (hrefURL, srcURL, altText, title) => {
  // This function creates a clickable photo with an optional
  // title and returns the link:
  const img = createElement("img", { src: srcURL, alt: altText });
  const link = createElement("a", { href: hrefURL });
  link.appendChild(img);
  if (title) {
    const textNode = createElement("h3", {}, title);
    link.appendChild(textNode);
  }
  return link;
};
