console.log('Functions - scopes');


(function parentFunction(testParam) {
    console.log(testParam);
})('voilaaaa!' && 'now what?')

//parentFunction('voila!')