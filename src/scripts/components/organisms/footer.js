// Internals:
const mdbLogo = require("../../../images/TheMovieDB-AltLong.svg");

// Components:
import { textElement } from "../atoms/text";
import { imgLink } from "../molecules/img-link";
import { textLink } from "../molecules/link-text";

export const createFooter = () => {
  const footer = document.createElement("footer");
  const reference = textElement(
    "p",
    "This application uses the TMDb API but is not endorsed or certified by TMDb."
  );
  const link = imgLink(
    "https://www.themoviedb.org/",
    mdbLogo,
    "Logo of The Movie DB."
  );
  const paragraph = textLink(
    "https://github.com/veerleprins/",
    "Veerle Prins",
    " , 2021"
  );

  footer.appendChild(reference);
  footer.appendChild(link);
  footer.appendChild(paragraph);
  return footer;
};
