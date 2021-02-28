export const addAttributes = (dataObject, element) => {
  // This function checks if the dataObject contains values
  // and if so, they are added to the element:
  if (dataObject) {
    const attributes = Object.keys(dataObject);
    attributes.forEach((attribute) =>
      element.setAttribute(attribute, dataObject[attribute])
    );
  }
  return;
};
