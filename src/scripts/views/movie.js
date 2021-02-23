// Modules
import { fetchData } from "../modules/collecting/collect";

// Components
import { createFooter } from "../components/organisms/footer";
import { createHeader } from "../components/organisms/headerDetail";

export const moviePage = (body) => {
  return async () => {
    // Remove CSS classes and add new class:
    body.classList.remove("home-page", "error-page", "movie-page");
    body.classList.add("movie-page");

    const id = window.location.pathname.replace(/\D/g, "");
    const movieData = await fetchData(`movie/${id}`, ``);
    const movieLink = await fetchData(`movie/${id}/videos`, ``);
    console.log(movieData);

    // Creating the header & footer:
    const header = createHeader(movieData.original_title);
    const footer = createFooter();

    // Appending the elements to the page:
    body.prepend(header);
    header.after(footer);
    return;
  };
};
