//Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally meth
const isLogged = true;

function promise(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged == true) {
      resolve(Math.random());
    } else {
      reject(new Error("error"));
    }
  });
}

function sFunction(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "john", age: 24 });
    } else {
      reject(new Error("error 2"));
    }
  });
}

promise(isLogged)
    .then((number)=>sFunction(number))
    .then((resolve)=>console.log(resolve))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("finally!"))