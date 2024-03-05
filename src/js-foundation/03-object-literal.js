"use strict";

const person = {
  address: {
    street: "A fake street",
    state: "State",
    zip: 12345,
  },
  age: 23,
  country: "Mexico",
  firstname: "Carlos",
  lastname: "Croman",
}

Object.freeze(person);

const clonedObject = structuredClone(person);

person.age = 24;
clonedObject.country = "Country safety changed";

console.log(person);
console.log(clonedObject);