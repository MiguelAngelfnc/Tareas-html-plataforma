/*Create a function sumUntil that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.*/

//Example:

function sumUntil(maxValue) {
    let resultado=0
    for (let i=0;i<=maxValue;i++){
        resultado=resultado +i;
    }
return resultado;

}

console.log(sumUntil(5)); 