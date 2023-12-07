//Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age).
 //Create the getters and setters methods for each property and a getter method called fullName that returns the full name.

class Person {
constructor(firstName,lastName,age){
    this._firstName=firstName;
    this._lastName=lastName;
    this._age=age;

}

get fullName(){
    return (this._firstName +" "+this._lastName);
}

set firstName(newVal){
    this._firstName=newVal
};

get firstName(){
    return this._firstName
}

set lastName(newVal){
    this._lastName=newVal
};

get lastName(){
    return this._lastName
}

set age(newVal){
    this._age=newVal
};

get age(){
    return this._age
}

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);