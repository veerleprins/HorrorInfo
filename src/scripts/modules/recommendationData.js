// Modules
import { fetchData } from "./collecting/collect";
import { getNecessary } from "./cleaning/clean";

export const getRecommendations = async () => {
  const movieID = window.location.pathname.replace(/\D/g, "");
  const data = await fetchData(`movie/${movieID}/recommendations`, `&page=1`);
  const movieData = getNecessary(data.results).slice(0, 5);
  return movieData;
};
