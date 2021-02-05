import { fetchData } from "./fetchData";
import { createItems } from "./createElements";
import { API_KEY } from "../../config/config";

export const start = async () => {
  const base = "https://api.themoviedb.org/3/movie/";
  const lang = "&language=en-US&page=1";

  const popular = await fetchData(`${base}popular?api_key=${API_KEY}${lang}`);
  const topRated = await fetchData(
    `${base}top_rated?api_key=${API_KEY}${lang}`
  );
  const upcoming = await fetchData(`${base}upcoming?api_key=${API_KEY}${lang}`);

  createItems(popular, "popular");
  createItems(topRated, "rated");
  createItems(upcoming, "upcoming");
};
