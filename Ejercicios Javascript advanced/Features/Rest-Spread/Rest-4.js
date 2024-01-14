//Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

function sum(...rest) {
  return rest.reduce((acumulador,sumandos)=>acumulador+sumandos,0)
}

const numbers = [1, 2, 3];

console.log(sum(numbers[0], numbers[1], numbers[2]));
