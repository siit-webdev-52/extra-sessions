console.log('Logical operators');

// AND &&
let x = 2;
let y = -8;
// check if both values are different than 0
if(x && y){
    console.log('Both are different than 0');
}

// OR ||
if(x || y){
    console.log('At least one is different than 0');
}

// NOT !
if(!x){
    console.log('X is equal to 0');
}


let test = 5;
if(test){
    console.log('is truthy');
}
//  can be written
test && console.log(`${test} is truthy in a one-liner!`);
