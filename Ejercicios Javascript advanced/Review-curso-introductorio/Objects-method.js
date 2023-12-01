const person={
    firstName : "Mario",
    lastName : "Rossi",
    age : 25
}
let keys=Object.keys(person);
for(let i=0; i<keys.length; i++){
    let llave=keys[i]
    console.log(llave + ": " + person[llave]);
}