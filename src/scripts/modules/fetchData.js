// This function fetches the data and returns a
// json version of the response :
export const fetchData = async (endpoint) => {
  const response = await fetch(endpoint);
  return await response.json();
};
