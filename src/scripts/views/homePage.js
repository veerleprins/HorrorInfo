// Modules
import { fetchData } from "../modules/getData";
import { start } from "../modules/cleanData";
import { createItems } from "../modules/createElements";

// Components

export const homePage = (body, router) => {
  return async () => {
    // Getting the data:
    body.setAttribute("class", "home");
    const horrorData = await fetchData("discover/movie", "&with_genres=27");
    const thrillerMovies = await fetchData("discover/movie", "&with_genres=53");
    const horrorMovies = start(horrorData.results);
    createItems(horrorMovies, body);
  };

  // return async () => {
  //   body.setAttribute("class", "homePage");

  //   return body.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //     <header><h1>Halloween movies</h1></header>
  //     <main>
  //       <section>
  //         <h2>Horrors:</h2>
  //         <ul>
  //           ${horrorMovies.results
  //             .map((movie) => {
  //               return `
  //               <li>
  //                 <h3>${movie.original_title}</h3>
  //                 <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="Poster of the movie: ${movie.original_title}">
  //               </li>
  //             `;
  //             })
  //             .join("")}
  //         </ul>
  //       </section>
  //       <section>
  //         <h2>Thrillers:</h2>
  //         <ul>
  //           ${thrillerMovies.results
  //             .map((movie) => {
  //               return `
  //               <li>
  //                 <h3>${movie.original_title}</h3>
  //                 <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="Poster of the movie: ${movie.original_title}">
  //               </li>
  //             `;
  //             })
  //             .join("")}
  //         </ul>
  //       </section>
  //     </main>
  //     ${footer()}
  //   `
  //   );
  // };
};
