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
