// Externals
import Navigo from "navigo";

// Routes
import { homePage } from "../views/homePage";
import { detailPage } from "../views/detailPage";
import { errorPage } from "../views/errorPage";

export const Router = () => {
  const router = new Navigo("/", false);
  const body = document.getElementById("app");

  try {
    router.on("/", homePage(body, router));
    router.on("/about", detailPage(body, router));
    router.on("/error", errorPage(body, router));
    router.notFound(() => {
      router.navigate("/error");
    });
    router.resolve();
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
