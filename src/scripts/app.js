import "regenerator-runtime/runtime";

// Routing
import { Router } from "./routes/router";

const init = () => {
  Router();
};

init();

// const start = async () => {
//   // This function starts the flow of the project:
//   const popular = await fetchData("movie/popular");
//   const topRated = await fetchData("movie/top_rated");
//   const upcoming = await fetchData("movie/upcoming");

//   // createItems(popular, "popular");
//   // createItems(topRated, "rated");
//   // createItems(upcoming, "upcoming");
// };

// start();
