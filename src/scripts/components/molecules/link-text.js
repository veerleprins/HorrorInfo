// Components:
import { createElement } from "../atoms/element";

export const createLinkInText = (url, name, text) => {
  // This function adds a link element to a paragraph
  // and returns the paragraph:
  const paragraph = createElement("p", { class: "copy" });
  const link = createElement("a", { href: url }, name);
  paragraph.append(link);
  paragraph.append(text);
  return paragraph;
};
