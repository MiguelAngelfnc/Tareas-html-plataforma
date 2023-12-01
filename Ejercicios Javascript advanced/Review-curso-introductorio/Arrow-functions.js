/*Turn the variables functions into arrow functions and combine the functions so that the result of the following mathematical operation is printed on the console:
 ((2 + 4) * (5 + 2) - 2) / 5 */

 let sum=(a,b)=> a + b

 let subtract=(a,b)=> a - b
 
 let multiply=(a,b)=> a * b
 
 let divide=(a,b)=> a / b
 
 const operation= divide(subtract(multiply(sum(2,4),sum(5,2)),2),5);
 console.log(operation);

 
 
 