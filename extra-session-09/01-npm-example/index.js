console.log('Hellow from the node environment');

setTimeout(() => console.log('delayed hello!'), 1000);

// ES6
import { cowsay } from "cowsayjs";
console.log(cowsay(`will anyone read this?`));