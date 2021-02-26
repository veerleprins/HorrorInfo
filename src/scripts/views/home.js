// Modules
import { getDiscoveryMovies } from "../modules/discoveryData";

// Components
import { createOverview } from "../components/organisms/overviewHome";
import { overviewTemplate } from "../components/templates/overview";

export const homePage = (body) => {
  return async () => {
    // Remove CSS classes and add new class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("home-page");

    // Getting the cleaned data:
    const discoveryData = await getDiscoveryMovies();

    // Creating the main:
    const overview = createOverview(discoveryData);

    // Appending the elements to the page:
    overviewTemplate(body, overview);
    return;
  };
};
