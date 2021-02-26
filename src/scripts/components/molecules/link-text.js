// Components:
import { createElement } from "../atoms/element";

export const textLink = (url, name, text) => {
  // This function adds a link element to a paragraph
  // and returns the paragraph:
  const p = createElement("p", { class: "copy" });
  const link = createElement("a", { href: url }, name);
  p.append(link);
  p.append(text);
  return p;
};
