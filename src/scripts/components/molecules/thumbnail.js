// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";

export const createTumbnail = (hrefURL, srcURL, altText, title, target) => {
  // This function creates a clickable photo with an optional
  // title and returns the link:
  const img = createElement("img", { src: srcURL, alt: altText });
  const link = createElement("a", { href: hrefURL, target: target });
  appendToElement([img], link);
  if (title) {
    const textNode = createElement("h3", {}, title);
    appendToElement([textNode], link);
  }
  return link;
};
