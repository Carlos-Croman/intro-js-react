const movie = {
  title: "Deadpool & Wolverine",
  rate: "R",
  duration: "120",
  release: {
    day: "26",
    month: "July",
    year: "2024"
  }
}

const { title: destructuredObjectProperty } = movie;

console.log(destructuredObjectProperty);

const character = { alias: "Thor", owner: "Marvel" };

function displayCharacterInfo({ alias, owner }) {
  console.log(`${alias} is owned by ${owner}`);
}

displayCharacterInfo(character);