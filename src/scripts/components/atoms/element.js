// Modules
import { addAttributes } from "../../modules/helpers/attributes";

export const createElement = (tag, dataObject, text) => {
  // This function creates an element to which attributes
  // and / or text are added:
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  addAttributes(dataObject, element);
  if (text) {
    element.appendChild(textNode);
  }
  return element;
};
