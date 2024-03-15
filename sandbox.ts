//arrays
let names = ['jane', 'john', 'mario'];

names.push('toad'); 
//this line works fine because we are pushing a string and name contains string type values
// names.push(2);
// names[0] = 7;
//line7&8 will give an error because the number type we are pushing does not match the string type initailly set.
// names = 'kira'; 
// line above will not work because names is of type array and we are tring to set it to a string CSSMathValue;

let numbers = [12, 4, 78, 39];

numbers.push(1);
// numbers.push('toad');
//numbers[0] = 'thabo';
// lines above gives error because we are pushing string type into integer type which is not allowed

let mixed = ['thabo', 3, true, 'mike'];

mixed.push(false);
mixed[1] = 'gugu';
mixed.push(10);
// the 3 lines above will work fine because the initial mixed array has all the different types so it will allow us to push or replace its values with different types

// ***objects***
let myObj = {
    name: 'thabo',
    age: 12,
    belt:  'black'
};

myObj.age = 14;
myObj.name = 'gugu';
// the 2 lines above work fine because we are updating existing properties with the same types as the initial types

// myObj.age = 'boytjie';
// myObj.belt = 3;
// the 2 lines above will not work because we are trying to update the properties with values that don't match the initial types.

// myObj = {
//     name: 'kira',
//     age: 32,
//     belt:  'white',
//     skills: ['kick'], we cannot add new properties to an existing object we can only update the existing values
// };