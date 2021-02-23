// Externals
import Navigo from "navigo";

// Routes
import { homePage, moviePage, errorPage } from "../views/exports";

export const Router = () => {
  const router = new Navigo("/", false);
  const body = document.querySelector("body");

  try {
    router
      .on({
        "/": homePage(body),
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
