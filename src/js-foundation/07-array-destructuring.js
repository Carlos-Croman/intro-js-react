const f1Teams = ["Red Bull", "Mercedes", "McLaren", "Ferrari",];

const [, mostConsecutiveWinningestTeam, , greatestTeam] = f1Teams;

console.log(greatestTeam);
console.log(mostConsecutiveWinningestTeam);

const useStateExample = (value) => [value, () => console.log("Use state example")];

const [value, setValue] = useStateExample("hook");

console.log(value);
setValue();