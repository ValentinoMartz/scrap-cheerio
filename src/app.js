const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/results")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((article) => {
      const arcticleItem = ` <div><h3>${article.title}</h3> <p>${article.url}</p></div>`;
      feedDisplay.insertAdjacentHTML("beforeend", arcticleItem);
    });
  })
  .catch((err) => console.log(err));
