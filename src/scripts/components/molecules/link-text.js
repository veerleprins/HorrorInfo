// Components:
import { linkElement } from "../atoms/link";

export const textLink = (url, name, text) => {
  const p = document.createElement("p");
  const link2 = linkElement(url, name);
  p.append("\u00A9 ");
  p.append(link2);
  p.append(text);
  return p;
};
