// Constants
import { API_KEY } from "./apiKey";

export const fetchData = async (term) => {
  // This function fetches the data and returns a
  // json version of the response :
  const URL = `https://api.themoviedb.org/3/movie/${term}?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (err) {
    return console.log("Something went wrong: ", err);
  }
};
