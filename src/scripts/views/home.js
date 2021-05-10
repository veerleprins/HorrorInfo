// Events
import { liveInput } from "../events/search";

// Modules
import { getDiscoveryMovies } from "../modules/discoveryData";
import { loadingState, checkLoaded } from "../modules/states/loadingState";
import { errorState } from "../modules/states/errorState";

// Components
import { createElement } from "../components/atoms/element";
import { layout } from "../components/templates/layout";
import { createSection } from "../components/organisms/section";

export const homePage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("home-page");

    // Remove old:
    body.classList.remove("movie-page");
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    // Add layout & state:
    layout(body);
    loadingState(true);

    try {
      // Getting the cleaned data:
      const data = await getDiscoveryMovies();

      // Adding the data:
      const main = document.querySelector("main");
      const section = await createSection(data, "Discover horrors: ");
      main.appendChild(section);

      // Change loading state:
      let images = document.getElementsByTagName("img");
      checkLoaded(images);

      // Event listener:
      const inputField = document.querySelector("input");
      const div = createElement("div");
      inputField.addEventListener(
        "input",
        (e) => {
          const inputDiv = document.querySelector(".inputDiv");
          liveInput(e, div, inputDiv);
        },
        false
      );
    } catch (err) {
      loadingState(false);
      errorState();
    }
  };
};
