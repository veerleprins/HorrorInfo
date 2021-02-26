export const createElement = (tag, dataObject, text) => {
  // This function creates an element to which attributes
  // and / or text are added:
  const element = document.createElement(tag);
  if (dataObject) {
    const attributes = Object.keys(dataObject);
    attributes.forEach((attribute) =>
      element.setAttribute(attribute, dataObject[attribute])
    );
  }
  if (text) {
    const textNode = document.createTextNode(text);
    element.append(textNode);
  }
  return element;
};
