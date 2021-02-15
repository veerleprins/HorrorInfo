export const start = (data) => {
  const necessaryData = getNecessary(data);
  const sortedData = sortArray(necessaryData, "avgVoted").slice(0, 10);
  return sortedData;
};

const getNecessary = (dataArray) => {
  // Changes the names and returns only necessary items.
  return dataArray.map((item) => {
    return {
      id: item.id,
      title: item.original_title,
      poster: item.poster_path,
      avgVoted: item.vote_average,
      voted: item.vote_count,
    };
  });
};

const sortArray = (dataArray, item) => {
  // Sorts an array from the highest value to the lowest
  // value according to a specific item in the array.
  return dataArray.sort((min, max) => max[item] - min[item]);
};
