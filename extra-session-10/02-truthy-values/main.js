console.log('Thruthy / Falsy values');

let x = document.querySelector('h1');
console.log(x);

if(x) {
    console.log(`${x} is considered truthy`);
    // a non empty string is considered truthy
    // except O, all Numbers are considered truthy
    // arrays are considered truthy
    // an object is considered truthy
}
else{
    console.log(`${x} is considered falsy`);
    // undefined is considered falsy
    // an empty string is considered falsy
    // O as Number is considered falsy
    // null is considered falsy
}