//explicit
 let character: string;
 let age: number;
 let isLoggedIn: boolean;

 //age = luigi; this willn not work, age is declared to number type.
age = 30;
//  isLoggedIn = 25; this will not work, isLoggedIn is of type boolean not number
isLoggedIn = false;

//arrays
let ninja: string[] = []; //initialize an array to an empty array to you can push to it oterwise it will not allow you to push to it.

ninja.push('panda');

//union types
//union type lets you have variables, arrays, or objects with mixed types
let mixed : (string|number|boolean)[] = []; //declaring a mixed array
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid : string|number; //declaring normal variable to union type
uid = 'ninja';
uid = 12;

// objects
let ninjaOne : object;
ninjaOne = {name: 'ninja', age: 32};
// two lines above are for a normal object

let ninjaTwo: {
    name: string,
    age: number,
    member: boolean
} // we decalred an object with explicit types and mixed types

ninjaTwo = {name: 'hero', age: 20, member: true}
// ninjaTwo = {name: 'hero', age: 20, member: true, skills: []} this line will not work
// we didn't declare an array when we were declaring ninjaTwo


