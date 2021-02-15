export const linkElement = (url, text) => {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  const textNode = document.createTextNode(text);
  link.append(textNode);
  return link;
};
