//Dynamic(any) type.
//  this is used to make the variable take any type be it string, number, boolean and so on.
var age = 25;
console.log(age);
// 2 lines above work and will display age which is 25
age = 'hello';
console.log(age);
// line above also works becaue we declared age to any
age = { name: 'luigi' };
console.log(age);
// line displays an object and works fine because age is any type
var mixed = []; //declaring an empty array of type any
mixed.push(23);
mixed.push('luigi');
mixed.push(false);
console.log(mixed);
// 4 lines above work Fingerprint, they add value of differnt typrs to an array and there's no errors.
var ninja; //declared object with properties of type any
ninja = { name: 'hero', age: 23 };
console.log(ninja); //will display object ninja
ninja = { name: 23, age: 'hero' }; //this works fine because properties are of type any
// but this takes away the protection offered by type script and can lead to errors but is useful if you do not know what the future value of a variable will be
console.log(ninja); //will display object ninja
