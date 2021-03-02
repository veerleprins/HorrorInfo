// Modules
import { getData } from "../modules/searchData";
import { removeElements } from "../modules/helpers/remove";

// Components
import { createList } from "../components/molecules/list";

export const liveInput = async (e, div, inputDiv) => {
  // This function shows a live input every time the user
  // enters something in the input field:
  inputDiv.appendChild(div);
  const list = document.querySelectorAll(".searchResult");
  const list2 = document.querySelectorAll(".ul-list");
  removeElements(list);
  removeElements(list2);
  if (e.target.value) {
    div.classList.remove("hidden");
    const data = await getData(e.target.value);
    const ul = createList(
      data,
      { class: "ul-list" },
      { class: "searchResult" }
    );
    div.appendChild(ul);
  } else {
    div.classList.add("hidden");
  }
};
