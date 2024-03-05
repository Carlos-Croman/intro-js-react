function functionDeclaration() {
  return "This is a function declaration";
}

console.log(functionDeclaration());

const functionExpression = function () {
  return "This is a function expression";
}

console.log(functionExpression());

const functionExpressionWithArrowFunction = (firstname) => {
  return `Hi, i'm ${firstname}`;
}

console.log(functionExpressionWithArrowFunction("Carlos"));