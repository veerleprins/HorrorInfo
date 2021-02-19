// Modules
import { fetchData } from "../modules/getData";
import { start } from "../modules/cleanData";
import { createItems } from "../modules/createElements";

export const homePage = (body, router) => {
  return async () => {
    // Getting the data:
    body.setAttribute("class", "home");
    const horrorData = await fetchData("discover/movie", "&with_genres=27");
    const thrillerMovies = await fetchData("discover/movie", "&with_genres=53");
    const horrorMovies = start(horrorData.results);
    createItems(horrorMovies, body);
  };
};
