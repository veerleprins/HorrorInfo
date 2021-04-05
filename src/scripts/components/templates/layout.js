// Components
import { createElement } from "../atoms/element";
import { createHeader } from "../organisms/header";
import { createFooter } from "../organisms/footer";

export const layout = (parent) => {
  // This function builds the template of the home page:
  const footer = createFooter();
  const header = createHeader();
  const main = createElement("main");

  parent.prepend(header);
  header.after(main);
  main.after(footer);
  return parent;
};
