// Constants
import { URL, KEY, lang } from "../../config/config";

export const fetchData = async (term, params) => {
  // This function fetches the data and returns a
  // json version of the response.
  try {
    const endpoint = `${URL}${term}${KEY}${params}${lang}`;
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
