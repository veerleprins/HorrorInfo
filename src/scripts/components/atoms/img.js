export const imgElement = (alt, path) => {
  const img = document.createElement("img");
  img.setAttribute("src", path);
  img.setAttribute("alt", alt);
  return img;
};
