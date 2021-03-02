export const removeElements = (dataArray) => {
  // This function removes all elements from the
  // page using the dataArray:
  dataArray.forEach((item) => {
    item.parentNode.removeChild(item);
  });
  return;
};
