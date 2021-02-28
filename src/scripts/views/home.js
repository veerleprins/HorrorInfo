// Modules
import { getDiscoveryMovies } from "../modules/discoveryData";

// Components
import { overviewTemplate } from "../components/templates/overview";

export const homePage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("home-page");

    // Getting the cleaned data:
    const discoveryData = await getDiscoveryMovies();

    // Getting the home template:
    overviewTemplate(body, discoveryData);
  };
};
