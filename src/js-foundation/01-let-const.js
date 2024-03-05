const fullname = "Carlos Castro R.";
const course = "React (Hooks & MERN)";

let whoami = "Hi, i'm " + fullname + " and i'm taking the " + course + " course course.";

console.log(whoami);

if (true) {
  const scopeConstant = "A constant that only exists in this scope.";
  let scopeVariable = "A variable that only exists in this scope.";

  console.log('"let" & "const" create scope variables/constants.');
}

const scopeConstant = "A constant with global scope.";
let scopeVariable = "A variable with global scope.";

console.log(scopeConstant);
console.log(scopeVariable);