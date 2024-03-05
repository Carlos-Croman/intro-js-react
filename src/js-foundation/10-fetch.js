fetch("https://api.breakingbadquotes.xyz/v1/quotes")
  .then((response) => response.json())
  .then(([data]) => {
    const rootNode = document.querySelector("#root");
    const authorNode = document.createElement("p");
    const quoteNode = document.createElement("q");

    authorNode.textContent = data.author + ": ";
    quoteNode.textContent = data.quote;

    authorNode.appendChild(quoteNode);
    rootNode.appendChild(authorNode);
  })
  .catch((error) => console.error(error));