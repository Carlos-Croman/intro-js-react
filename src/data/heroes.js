const owners = ["Marvel", "DC"];

const heroes = [
  { id: 1, name: "Spider-Man", owner: owners[0] },
  { id: 2, name: "Iron-Man", owner: owners[0] },
  { id: 3, name: "Superman", owner: owners[1] },
  { id: 4, name: "Batman", owner: owners[1] },
  { id: 5, name: "Flash", owner: owners[1] },
];

export {
  heroes,
  owners as default,
};