// Modules
import { addAttributes } from "../../modules/helpers/attributes";

export const createElement = (tag, dataObject, text) => {
  // This function creates an element to which attributes
  // and / or text are added:
  const element = document.createElement(tag);
  addAttributes(dataObject, element);
  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }
  return element;
};
