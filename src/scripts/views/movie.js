// Modules
import { getData } from "../modules/movieData";

// Components
import { createOverview } from "../components/organisms/overviewDetail";
import { createSection } from "../components/organisms/sectionTwo";
import { detailTemplate } from "../components/templates/detail";

export const moviePage = (body) => {
  return async () => {
    // Remove CSS classes and add new class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("movie-page");

    // Get data:
    const [movie, recommendations, providers] = await getData();

    // Creating the main:
    const section1 = createOverview(movie, providers);
    const section2 = createSection(recommendations);
    const main = document.createElement("main");

    // Appending the elements to the page:
    main.appendChild(section1);
    main.appendChild(section2);
    detailTemplate(body, main, movie);
    return;
  };
};
