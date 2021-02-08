// Externals
import Navigo from "navigo";

// Modules
import { homePage } from "../views/homePage";
import { detailPage } from "../views/detailPage";

const router = new Navigo("/", false);

export const Router = () => {
  const body = document.getElementById("app");

  try {
    router
      .on({
        "/": homePage(body, router),
        "/about": detailPage(body, router),
        "/error": () => {
          console.log("error");
        },
      })
      .notFound(() => {
        console.error("404");
        router.navigate("/error");
      })
      .resolve();
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
