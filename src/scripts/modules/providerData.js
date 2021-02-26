// Modules
import { fetchData } from "./collecting/collect";
import { getList, getReplaced, getUnique } from "./cleaning/clean";

export const getProviders = async () => {
  const movieID = window.location.pathname.replace(/\D/g, "");
  const fetched = await fetchData(`movie/${movieID}/watch/providers`, ``);
  let providerList;
  if (fetched.results.NL) {
    providerList = await getList(
      fetched.results.NL,
      ["buy", "rent", "flatrate"],
      "provider_name"
    );
  } else {
    providerList = [];
  }
  const uniqueItems = getUnique(providerList);
  const data = getReplaced(uniqueItems, "-");
  return data;
};
