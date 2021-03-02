// Components
import { createElement } from "../../components/atoms/element";

export const createListElements = (dataArray, tag) => {
  // This function helps to create several of the same element
  // and returns this list of created elements:
  return dataArray.map((text) => {
    return createElement(tag, {}, text);
  });
};
