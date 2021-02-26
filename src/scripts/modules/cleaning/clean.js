export const sortArray = (dataArray, item) => {
  // Sorts an array from the highest value to the lowest
  // value according to a specific item in the array.
  return dataArray.sort((min, max) => max[item] - min[item]);
};

export const getNested = (dataArray, key) => {
  // This function grabs all single items contained
  // in a nested array and adds them to a new array
  // named 'newDataArray':
  const newDataArray = [];
  dataArray.forEach((item) => {
    item[key].forEach((obj) => {
      newDataArray.push(obj);
    });
  });
  return newDataArray;
};

export const getList = (dataObject, keyArray, itemName) => {
  // This function goes through the 'keyArray' and checks if
  // the key exists in the 'dataObject'. If it exists, it loops
  // through all the values of the key and pushes a specific
  // item of the value to a new array:
  const newArray = [];
  keyArray.forEach((key) => {
    if (key in dataObject) {
      dataObject[key].forEach((value) => {
        newArray.push(value[itemName]);
      });
    }
  });
  return newArray;
};

export const getUnique = (dataArray) => {
  // This function filters the unique value from
  // the dataArray and returns it as a new array:
  // Source: https://attacomsian.com/blog/javascript-remove-duplicates-from-array
  return dataArray.filter((value, index) => {
    return dataArray.indexOf(value) === index;
  });
};

export const getReplaced = (dataArray, value) => {
  // This function changes all spaces in the 'dataArray'
  // to the new 'item', changes everything to lowercase,
  // and returns the new array:
  return dataArray.map((item) => {
    return item.replace(/\s/g, value).toLowerCase();
  });
};

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

export const checkKey = (dataObject) => {
  // This function checks if a certain key is present in the
  // object, then calls the function 'getList' and returns its output:
  let newList = [];
  if (dataObject.NL) {
    newList = getList(
      dataObject.NL,
      ["buy", "rent", "flatrate"],
      "provider_name"
    );
  }
  return newList;
};
