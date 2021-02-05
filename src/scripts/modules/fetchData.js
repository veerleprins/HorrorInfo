// This function fetches the data and returns a
// json version of the response :
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    return console.log("Something went wrong: ", err);
  }
};
