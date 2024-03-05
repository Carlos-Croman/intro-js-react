import owners, { heroes } from "../data/heroes";

function getHeroesByOwner(owner) {
  return heroes.filter((hero) => hero.owner === owner);
}

// console.log( getHeroesByOwner(owners[0]) );

function getHeroByID(id) {
  return heroes.find((hero) => hero.id === id);
}

const [superhero] = heroes;
// console.log( getHeroByID(superhero.id) );

export const getHeroByAlias = (alias) => heroes.find((hero) => hero.name === alias);