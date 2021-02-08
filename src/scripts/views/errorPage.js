export const errorPage = (content, router) => {
  content.setAttribute("class", "errorPage");
  return async () => {
    return (content.innerHTML = `
      <header>
        <h1>404...</h1>
      </header>
    `);
  };
};
