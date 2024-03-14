const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

//to compile use -> tsc sandbox.ts -w
//this will compile and create a sandbox.js file that the browser can read