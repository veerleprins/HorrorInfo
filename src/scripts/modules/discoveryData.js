// Constants
import { param } from "../config/config";

// Modules
import { fetchData } from "./collecting/collect";
import {
  getNecessary,
  sortArray,
  getNested,
  filterItem,
} from "./cleaning/clean";

export const getDiscoveryMovies = async () => {
  // This function fetches the same endpoint five times using
  // promise.all, cleans the data and returns it:
  try {
    // Fetch all data:
    const [data1, data2, data3, data4, data5] = await Promise.all(
      [1, 2, 3, 4, 5].map((page) =>
        fetchData("discover/movie", `${param}${page}`)
      )
    );

    // Clean all data:
    const merged = getNested([data1, data2, data3, data4, data5], "results");
    const required = getNecessary(merged);
    const sorted = sortArray(required, "avgVoted");
    const data = filterItem(sorted, "voted").slice(0, 10);

    return data;
  } catch (err) {
    console.error(err);
  }
};
