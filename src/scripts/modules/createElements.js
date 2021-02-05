// This function creates the elements :
export const createItems = (data, type) => {
  let parent = document.getElementById(type);
  console.log(data.results);
  data.results.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w342/${element.poster_path}`
    );
    li.appendChild(img);
    parent.appendChild(li);
  });
};
