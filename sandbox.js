<<<<<<< HEAD
//explicit
var character;
var age;
var isLoggedIn;
//age = luigi; this willn not work, age is declared to number type.
age = 30;
//  isLoggedIn = 25; this will not work, isLoggedIn is of type boolean not number
isLoggedIn = false;
//arrays
var ninja = []; //initialize an array to an empty array to you can push to it oterwise it will not allow you to push to it.
ninja.push('panda');
//union types
//union type lets you have variables, arrays, or objects with mixed types
var mixed = []; //declaring a mixed array
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid; //declaring normal variable to union type
uid = 'ninja';
uid = 12;
// objects
var ninjaOne;
ninjaOne = { name: 'ninja', age: 32 };
// two lines above are for a normal object
var ninjaTwo; // we decalred an object with explicit types and mixed types
ninjaTwo = { name: 'hero', age: 20, member: true };
// ninjaTwo = {name: 'hero', age: 20, member: true, skills: []} this line will not work
// we didn't declare an array when we were declaring ninjaTwo
=======
//types number, string, boolean
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
// the line above won't work because character was initialized 
// to a string value so it's of type string.
character = 'luigi';
// the line above works since luigi is a string type.
// tis applies to all types we can change the value not the type.
age = 40;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
>>>>>>> 85282b22996cf3114b13e9c1377a1fe0f8d89c29
