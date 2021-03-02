// Internals
const mdbLogo = require("../../../images/TheMovieDB-AltLong.svg");

// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createTumbnail } from "../molecules/thumbnail";
import { createLinkInText } from "../molecules/hyperlinkText";

export const createFooter = () => {
  // This function builds the footer of all the pages:
  const footer = createElement("footer");
  const reference = createElement(
    "p",
    {},
    "This application uses the TMDb API but is not endorsed or certified by TMDb."
  );
  const link = createTumbnail(
    "https://www.themoviedb.org/",
    mdbLogo,
    "Logo of The Movie DB."
  );
  const paragraph = createLinkInText(
    "https://github.com/veerleprins/",
    "Veerle Prins",
    "copy"
  );

  appendToElement([reference, link, paragraph], footer);
  return footer;
};
