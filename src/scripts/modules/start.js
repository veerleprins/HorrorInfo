import { fetchData } from "./fetchData";
import { createItems } from "./createElements";

let baseURL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;
const popularURL = `${baseURL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const ratedURL = `${baseURL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const start = async () => {
  const popular = await fetchData(popularURL);
  const topRated = await fetchData(ratedURL);
  console.log(API_KEY);
  console.log(popularURL);
  createItems(popular, "popular");
  createItems(topRated, "rated");
};
