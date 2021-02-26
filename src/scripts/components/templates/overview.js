// Components
import { createHeader } from "../organisms/header";
import { createFooter } from "../organisms/footer";

export const overviewTemplate = (parent, main) => {
  const footer = createFooter();
  const header = createHeader();
  parent.prepend(header);
  header.after(main);
  main.after(footer);
  return;
};
