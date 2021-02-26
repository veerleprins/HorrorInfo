// Modules
import { getMovieInfo } from "../modules/posterData";
import { getRecommendations } from "../modules/recommendationData";

// Components
import { createHeader } from "../components/organisms/headerDetail";
import { createFooter } from "../components/organisms/footer";
import { createOverview } from "../components/organisms/overviewDetail";
import { createSection } from "../components/organisms/sectionTwo";
import { getProviders } from "../modules/providerData";

export const moviePage = (body) => {
  return async () => {
    // Remove CSS classes and add new class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("movie-page");

    // Get data:
    const movieData = await getMovieInfo();
    const recommendations = await getRecommendations();
    const providerData = await getProviders();

    const main = document.createElement("main");

    // Creating the header & footer:
    const header = createHeader(movieData.original_title);
    const section1 = createOverview(movieData, providerData);
    const section2 = createSection(recommendations);
    const footer = createFooter();

    // Appending the elements to the page:
    body.prepend(header);
    main.appendChild(section1);
    main.appendChild(section2);
    header.after(main);
    main.after(footer);
    return;
  };
};
