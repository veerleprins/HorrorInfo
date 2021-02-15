export const textElement = (tag, text) => {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.append(textNode);
  return element;
};
