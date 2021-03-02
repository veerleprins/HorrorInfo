// Events
import { liveInput } from "../events/search";

// Modules
import { getDiscoveryMovies } from "../modules/discoveryData";

// Components
import { overviewTemplate } from "../components/templates/overview";
import { createElement } from "../components/atoms/element";

export const homePage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("home-page");

    // Getting the cleaned data:
    const discoveryData = await getDiscoveryMovies();

    // Getting the home template:
    overviewTemplate(body, discoveryData);

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
  };
};
