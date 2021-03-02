// Modules
import { fetchData } from "./collecting/collect";
import { getNecessary } from "./cleaning/clean";

export const getData = async (query) => {
  // This function fetches an endpoint, cleans
  // this data and returns it:
  try {
    // Fetch all data:
    const searchData = await fetchData(`search/movie`, `&query=${query}`);

    // Clean all data:
    const data = searchData.results.filter((movie) => {
      return (
        movie.poster_path !== null &&
        movie.genre_ids.includes(27) &&
        movie.original_language === "en"
      );
    });
    const cleanedData = getNecessary(data);
    return cleanedData;
  } catch (err) {
    console.error(err);
  }
};
