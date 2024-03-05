import { getHeroByAlias } from "./08-import-export";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroByAlias("Superman");

    if (!hero) {
      reject("No hero found");
    }

    resolve(hero);
  }, 2000);
})

promise
  .then((result) => alert(JSON.stringify(result)))
  .catch((error) => alert(error));