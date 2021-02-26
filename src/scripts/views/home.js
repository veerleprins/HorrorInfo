// Modules
import { getDiscoveryMovies } from "../modules/discoveryData";

// Components
import { createHeader } from "../components/organisms/header";
import { createFooter } from "../components/organisms/footer";
import { createOverview } from "../components/organisms/overview";

export const homePage = (body) => {
  return async () => {
    // Remove CSS classes and add new class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("home-page");

    // Getting the cleaned data:
    const moviesData = await getDiscoveryMovies();

    // Creating the elements:
    const header = createHeader();
    const footer = createFooter();
    const overview = createOverview(moviesData);

    // Appending the elements to the page:
    body.prepend(header);
    header.after(overview);
    overview.after(footer);
    return;
  };
};
