console.log('main.js is loaded...');

// String, Number, Boolean

// Bigint
console.log(Number.MAX_SAFE_INTEGER);       // max value represented as integer
console.log(Number.MAX_SAFE_INTEGER  + 1);  // ading 1 to max value represented as integer

const x = Number.MAX_SAFE_INTEGER + 1;
console.log(x);         // Expected output: 9007199254740992

const y = Number.MAX_SAFE_INTEGER + 2;
console.log(y);         // Expected output: 9007199254740992

console.log(x === y);   // Expected output: true

// declaring a Bigint value
const hugeString = BigInt("9007199254740991");
console.log(hugeString);

/**
 * undefined
 */
let u;
console.log(u, typeof u);

/**
 * null
 */
let n = document.querySelector('div');
console.log(n, typeof n);


// symbol
const sym1 = Symbol("foo");
console.log(sym1, typeof sym1);


// object
let person = {
    name: "Ion",
    age: 39
}
console.log(person, typeof person);
console.log(person);


// arrays ?!
const a = [7, 4,9.5, true];
console.log(a, typeof a);
console.log(a);
