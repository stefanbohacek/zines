export default (element) => {
  const lightHref = element.querySelector("img")?.src;
  const darkHref = element.querySelector("source")?.srcset;
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  const update = () => {
    element.href = query.matches ? darkHref : lightHref;
  };

  update();
  query.addEventListener("change", update);
};
