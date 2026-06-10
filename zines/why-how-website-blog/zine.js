import ready from "../../js/modules/ready.js";
import setColorSchemeLink from "../../js/modules/colorSchemeLink.js";
import applyRandomTilt from "../../js/modules/randomTilt.js";

ready(() => {
  const link = document.getElementById("zine-howto-link");
  if (link) {
    setColorSchemeLink(link);
  }

  applyRandomTilt(".testimonials .handwritten");
});
