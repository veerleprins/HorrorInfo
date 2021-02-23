// Components:
import { createFooter } from "../components/organisms/footer";

export const errorPage = (body) => {
  return async () => {
    // Remove old classes and adds the good class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("error-page");

    const footer = createFooter();
    body.prepend(footer);
  };
};
