// Constants
import { API_KEY } from "./apiKey";

export const fetchData = async (term, params) => {
  // This function fetches the data and returns a
  // json version of the response :
  const URL = `https://api.themoviedb.org/3/${term}?api_key=${API_KEY}${params}&language=en-US&page=1`;
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (err) {
    return console.error("Something went wrong: ", err);
  }
};
