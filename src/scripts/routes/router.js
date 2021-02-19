// Externals
import Navigo from "navigo";

// Routes
import { homePage } from "../views/homePage";
import { moviePage } from "../views/moviePage";
import { errorPage } from "../views/errorPage";

export const Router = () => {
  const router = new Navigo("/", false);
  const body = document.querySelector("body");

  try {
    router
      .on({
        "/": homePage(body),
        "/movie": moviePage(body),
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
