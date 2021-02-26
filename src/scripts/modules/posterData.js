// Modules
import { fetchData } from "./collecting/collect";

export const getMovieInfo = async () => {
  const movieID = window.location.pathname.replace(/\D/g, "");
  const movieData = await fetchData(`movie/${movieID}`, ``);
  return movieData;
};
