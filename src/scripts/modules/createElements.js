export const createItems = (data, type) => {
  // This function creates the elements :
  let parent = document.getElementsByClassName(type);
  data.results.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w342/${element.poster_path}`
    );
    li.appendChild(img);
    parent[0].appendChild(li);
  });
};
