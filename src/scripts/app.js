import "regenerator-runtime/runtime";

// Modules
import { Router } from "./routes/router";

const init = () => {
  Router();
};

init();

// const start = async () => {
//   // This function starts the flow of the project:
//   const popular = await fetchData("popular");
//   const topRated = await fetchData("top_rated");
//   const upcoming = await fetchData("upcoming");

//   // createItems(popular, "popular");
//   // createItems(topRated, "rated");
//   // createItems(upcoming, "upcoming");
// };

// start();
