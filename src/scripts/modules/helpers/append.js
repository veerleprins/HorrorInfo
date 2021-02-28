export const appendToElement = (elementArray, parent) => {
  // This function receives a list of elements and
  // adds all elements to the parent element:
  elementArray.forEach((element) => {
    parent.appendChild(element);
  });
};
