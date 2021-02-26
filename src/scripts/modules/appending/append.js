export const appendToElement = (elementArray, parent) => {
  elementArray.forEach((element) => {
    parent.appendChild(element);
  });
};
