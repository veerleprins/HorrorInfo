// Components
import { createHeader } from "../organisms/headerDetail";
import { createFooter } from "../organisms/footer";
import { createElement } from "../atoms/element";

export const detail = (parent, title) => {
  // This function builds the template of the detail page:
  // const header = createHeader(data.original_title);
  const header = createHeader(title);
  const main = createElement("main");
  const footer = createFooter();
  parent.prepend(header);
  header.after(main);
  main.after(footer);
  return;
};
