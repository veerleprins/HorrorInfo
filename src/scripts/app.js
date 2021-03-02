// Externals
import Navigo from "navigo";

// Routes
import { homePage, moviePage, errorPage } from "./views/exports";

export const init = () => {
  // This function initializes the router and calls
  // a specific function associated with the page that
  // the user is requesting:
  try {
    const router = new Navigo("/", false);
    const body = document.querySelector("body");
    router
      .on({
        "/": homePage(body, router),
        "/movie/:id": moviePage(body),
        "/error": errorPage(body),
      })
      .notFound(() => {
        router.navigate("/error");
      })
      .resolve();
  } catch (err) {
    throw new Error(err);
  }
};

init();
