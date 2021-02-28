// Components:
import { createFooter } from "../components/organisms/footer";

export const errorPage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("error-page");

    const footer = createFooter();
    body.prepend(footer);
  };
};
