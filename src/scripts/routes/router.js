// Externals
import Navigo from "navigo";

// Routes
import { homePage } from "../views/homePage";
import { detailPage } from "../views/detailPage";
import { errorPage } from "../views/errorPage";

export const Router = () => {
  const router = new Navigo("/", false);
  const body = document.getElementsByTagName("body");

  try {
    router
      .on({
        "/": homePage(body[0], router),
        "/movie": detailPage(body[0], router),
        "/error": errorPage(body[0], router),
      })
      .notFound(() => {
        router.navigate("/error");
      })
      .resolve();
  } catch (err) {
    throw new Error(err);
  }
};
