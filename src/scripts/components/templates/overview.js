// Components
import { createElement } from "../atoms/element";
import { createHeader } from "../organisms/header";
import { createFooter } from "../organisms/footer";
import { createSection } from "../organisms/section";

export const overviewTemplate = (parent, data) => {
  // This function builds the template of the home page:
  const footer = createFooter();
  const header = createHeader();
  const main = createElement("main");
  const section = createSection(data, "Discover horrors: ");
  main.appendChild(section);
  parent.prepend(header);
  header.after(main);
  main.after(footer);
  return parent;
};
