// Modules
import { fetchData } from "./collecting/collect";
import {
  checkKey,
  getNecessary,
  getUnique,
  getReplaced,
} from "./cleaning/clean";

export const getData = async () => {
  try {
    // Internal
    const ID = window.location.pathname.replace(/\D/g, "");

    // Fetch all data:
    const movieData = await fetchData(`movie/${ID}`, ``);
    const recommendedData = await fetchData(`movie/${ID}/recommendations`, ``);
    const providerData = await fetchData(`movie/${ID}/watch/providers`, ``);

    // Clean all data:
    const providerList = checkKey(providerData.results);
    const recommended = getNecessary(recommendedData.results).slice(0, 5);
    const uniqueItems = getUnique(providerList);
    const data = getReplaced(uniqueItems, "-");

    return [movieData, recommended, data];
  } catch (err) {
    console.error(err);
  }
};
