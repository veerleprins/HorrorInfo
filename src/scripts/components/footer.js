// Internals
const logoURL = require("../../images/TheMovieDB-AltLong.svg");

export const footer = () => {
  return `
    <footer>
      <p>
        This application uses the TMDb API but is not endorsed or certified by
        TMDb.
      </p>
      <a href="https://www.themoviedb.org/">
        <img src="${logoURL}" alt="Logo of The Movie DB."/>
      </a>
      <p>
        &copy; <a href="https://github.com/veerleprins/">Veerle Prins</a> , 2020
      </p>
    </footer>
  `;
};
