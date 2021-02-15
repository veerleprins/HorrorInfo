// Internals:
import { posterPath } from "../config/config";

// Components:
import { createFooter } from "../components/organisms/footer";
import { createHeader } from "../components/organisms/header";

export const createItems = (data, parent) => {
  // This function creates the elements :
  const ul = document.createElement("ul");
  const section = document.createElement("section");
  const main = document.createElement("main");
  data.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let text = document.createTextNode(element.title);
    img.setAttribute("src", `${posterPath}${element.poster}`);
    title.appendChild(text);
    li.appendChild(title);
    li.appendChild(img);
    ul.appendChild(li);
  });
  section.appendChild(ul);
  main.appendChild(section);
  const footer = createFooter();
  const header = createHeader();
  parent.prepend(header);
  header.after(main);
  main.after(footer);
};
