/*In this exercise we have created two objects: person1 e person2. The object person2 has been assigned to the object person1.
 You should modify the property firstName of the object person2 in "Simon".

Write a comment explaining why, by modifying the object person2, also the object person1 would be modified.*/

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/*La razón por la que esto sucede, es que al asignar person2 a person1, no estamos creando un segundo objeto, sino una nueva referencia al mismo objeto, 
con lo cual person2 y person1 se refieren al mismo objeto*/
