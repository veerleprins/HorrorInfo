// Components
import { createHeader } from "../organisms/headerDetail";
import { createFooter } from "../organisms/footer";

export const detailTemplate = (parent, main, data) => {
  // This function builds the template of the detail page:
  const header = createHeader(data.original_title);
  const footer = createFooter();
  parent.prepend(header);
  header.after(main);
  main.after(footer);
  return;
};
