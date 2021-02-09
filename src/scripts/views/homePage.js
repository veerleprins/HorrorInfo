// Modules
import { fetchData } from "../modules/getData";

// Components
import { footer } from "../components/footer";

export const homePage = (body, router) => {
  body.setAttribute("class", "homePage");
  return async () => {
    const horrors = await fetchData("discover/movie", "&with_genres=27");
    const thrillers = await fetchData("discover/movie", "&with_genres=53");
    console.log(horrors.results);
    return body.insertAdjacentHTML(
      "beforeend",
      `
      <header><h1>Halloween movies</h1></header>
      <main>
        <section>
          <h2>Horrors:</h2>
          <ul>
            ${horrors.results
              .map((movie) => {
                return `
                <li>
                  <h3>${movie.original_title}</h3>
                  <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="Poster of the movie: ${movie.original_title}">
                </li>
              `;
              })
              .join("")}
          </ul>
        </section>
        <section>
          <h2>Thrillers:</h2>
          <ul>
            ${thrillers.results
              .map((movie) => {
                return `
                <li>
                  <h3>${movie.original_title}</h3>
                  <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="Poster of the movie: ${movie.original_title}">
                </li>
              `;
              })
              .join("")}
          </ul>
        </section>
      </main>
      ${footer()}
    `
    );
  };
};
