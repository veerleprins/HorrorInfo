export const homePage = (content, router) => {
  content.setAttribute("class", "homePage");
  return async () => {
    console.log("Test");
    return (content.innerHTML = `
      <header>
        <h1>Movies</h1>
      </header>
      <main>
      <section>
        <h2>Popular:</h2>
      </section>
      </main>
    `);
  };
};
