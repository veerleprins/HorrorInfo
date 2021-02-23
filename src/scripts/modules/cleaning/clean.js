export const getNecessary = (dataArray) => {
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

export const sortArray = (dataArray, item) => {
  // Sorts an array from the highest value to the lowest
  // value according to a specific item in the array.
  return dataArray.sort((min, max) => max[item] - min[item]);
};

export const getNested = (dataArray) => {
  // This function grabs all single items contained
  // in a nested array and adds them to a new array
  // named 'newDataArray':
  const newDataArray = [];
  dataArray.forEach((item) => {
    item.forEach((obj) => {
      newDataArray.push(obj);
    });
  });
  return newDataArray;
};
