import { fetchData } from "./fetchData";

let baseURL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;
const popularURL = `${baseURL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const ratedURL = `${baseURL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const start = async () => {
  const popular = await fetchData(popularURL);
  const topRated = await fetchData(ratedURL);
  createItems(popular, "popular");
  createItems(topRated, "rated");
};

const createItems = (data, type) => {
  let parent = document.getElementById(type);
  console.log(data.results);
  data.results.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w342/${element.poster_path}`
    );
    li.appendChild(img);
    parent.appendChild(li);
  });
};
