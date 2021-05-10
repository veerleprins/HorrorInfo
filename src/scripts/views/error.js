// Components:
import { createFooter } from "../components/organisms/footer";
import { createElement } from "../components/atoms/element";

export const errorPage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("error-page");

    const title = createElement("h1", {}, "Oops! 404!");
    const paragraph = createElement(
      "p",
      {},
      "It looks like something went wrong..."
    );
    const section = createElement("section", {});
    // section.append(title);
    section.append(paragraph);
    body.append(title);

    const footer = createFooter();
    body.append(section);
    body.append(footer);
  };
};
