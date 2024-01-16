//Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject.
//Then manage the promise with then and catch in case of any reject.

const number = 11;

const promesa = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject("el numero es inferior");
  }
});

promesa.then((number)=> console.log(number))
promesa.catch((error)=>console.log(error));

