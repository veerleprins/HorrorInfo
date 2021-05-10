// Modules
import { getData } from "../modules/movieData";
import { loadingState, checkLoaded } from "../modules/states/loadingState";

// Components
import { createOverview } from "../components/organisms/overviewDetail";
import { createSection } from "../components/organisms/section";
import { detail } from "../components/templates/detail";

export const moviePage = (body) => {
  return async () => {
    // Adds class:
    body.classList.add("movie-page");
    detail(body, "Loading...");
    loadingState(true);

    try {
      // Get data:
      const [movie, recommendations, providers] = await getData();

      // Creating the page:
      const main = document.querySelector("main");
      const h1 = document.querySelector("h1");
      h1.innerHTML = movie.original_title;

      const section1 = createOverview(movie, providers);
      const section2 = createSection(recommendations, "Recommendations:");

      // Appending the elements to the page:
      main.appendChild(section1);
      main.appendChild(section2);

      // Change loading state:
      let images = document.getElementsByTagName("img");
      checkLoaded(images);
    } catch (err) {
      loadingState(false);
      errorState();
    }
  };
};
