// Modules
import { fetchData } from "./collecting/collect";
import { getNested } from "./cleaning/clean";
import { getNecessary, sortArray } from "./cleaning/clean";

export const getDiscovery = async () => {
  // This function fetches a similar endpoint five times using
  // a Promise.all and cleans the data so that it can be sent
  // back to the home view:
  try {
    const param = `&with_genres=27&without_genres=35%2C14%2C18%2C28&page=`;
    const [data1, data2, data3, data4, data5] = await Promise.all(
      [1, 2, 3, 4, 5].map((page) =>
        fetchData("discover/movie", `${param}${page}`)
      )
    );
    const totalArray = getNested([
      data1.results,
      data2.results,
      data3.results,
      data4.results,
      data5.results,
    ]);
    const necessaryData = getNecessary(totalArray);
    return sortArray(necessaryData, "avgVoted").slice(0, 10);
  } catch (err) {
    console.error(err);
  }
};
