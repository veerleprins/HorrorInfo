// Modules
import { fetchData } from "./collecting/collect";
import {
  checkKey,
  getNecessary,
  getUnique,
  getReplaced,
} from "./cleaning/clean";

export const getData = async () => {
  // This function fetches different endpoints, cleans
  // this data and returns the cleaned data:
  try {
    // Internal
    const ID = window.location.pathname.replace(/\D/g, "");

    // Fetch all data:
    const movieData = await fetchData(`movie/${ID}`, ``);
    const recommendedData = await fetchData(`movie/${ID}/recommendations`, ``);
    const providerData = await fetchData(`movie/${ID}/watch/providers`, ``);

    // Clean all data:
    const providerList = checkKey(providerData.results);
    const uniqueProviders = getUnique(providerList);
    const cleanProviders = getReplaced(uniqueProviders, "-");
    const cleanRecommended = getNecessary(recommendedData.results).slice(0, 5);

    return [movieData, cleanRecommended, cleanProviders];
  } catch (err) {
    console.error(err);
  }
};
