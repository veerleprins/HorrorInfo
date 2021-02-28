// Modules
import { getData } from "../modules/movieData";

// Components
import { createOverview } from "../components/organisms/overviewDetail";
import { createSection } from "../components/organisms/section";
import { detailTemplate } from "../components/templates/detail";

export const moviePage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("movie-page");

    // Get data:
    const [movie, recommendations, providers] = await getData();

    // Creating the main:
    const main = document.createElement("main");
    const section1 = createOverview(movie, providers);
    const section2 = createSection(recommendations, "Recommendations:");

    // Appending the elements to the page:
    main.appendChild(section1);
    main.appendChild(section2);
    detailTemplate(body, main, movie);
  };
};
