export const detailPage = (content, router) => {
  return async () => {
    console.log("het werkt about");
    content.setAttribute("class", "aboutPage");
  };
};
