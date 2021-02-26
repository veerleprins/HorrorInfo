// Internals
const mdbLogo = require("../../../images/TheMovieDB-AltLong.svg");

// Components
import { createElement } from "../atoms/element";
import { createClickableIMG } from "../molecules/img-link";
import { textLink } from "../molecules/link-text";

export const createFooter = () => {
  const footer = createElement("footer");
  const reference = createElement(
    "p",
    {},
    "This application uses the TMDb API but is not endorsed or certified by TMDb."
  );
  const link = createClickableIMG(
    "https://www.themoviedb.org/",
    mdbLogo,
    "Logo of The Movie DB."
  );
  const paragraph = textLink(
    "https://github.com/veerleprins/",
    "Veerle Prins",
    ", 2021"
  );

  footer.appendChild(reference);
  footer.appendChild(link);
  footer.appendChild(paragraph);
  return footer;
};
