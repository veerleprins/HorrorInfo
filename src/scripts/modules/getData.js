// Constants
import { URL, KEY, lang } from "../config/config";

export const fetchData = async (term, params) => {
  // This function fetches the data and returns a
  // json version of the response.
  const endpoint = `${URL}${term}${KEY}${params}${lang}`;
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    next(err);
  }
};
