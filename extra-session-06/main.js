console.log(`Random excuse generator..`);

const leadIn = [
    `I'm sorry but`,
    `Beg you thousand pardons, but`,
    `I apologise, however`,
    `Holy shit! Get this: `,
    `So I was minding my own business and boom: `,
    `This is a terrible excuse, but`,
    `Holy Moses..`,
    `Wow, do i have an epic story for you: `,
    `This is going to sound crazy, but`
];

const perpetrator = [
    `Godzilla`,
    `your mom`,
    `the offensive line of '76 Dallas Cowboys`,
    `a triceratops named Penelope`,
    `the director of "101 Dalmatians"`,
    `the ghost of Hitler`,
    `the entire Roman Empire`,
    `a sad clown`,
    `the Pope`,
    `a proffesional criket team`,
    `my astrologist`,
    `a grumpy cat`,
    `a kinght in a black armor`,
    `Princess Peach`,
    `a very hungry vampire`,
    `a bunch of drunken elves`,
    `a man with six fingers on the right hand`,
    `Rayden from Mortal Kombat`,
    `a handicapped gentelman`
];

const delayingFactor = [
    `tried to seduce me`,
    `pulled me over in a stolen cop car and demaded fellatio`,
    `made me find Jesus`,
    `kept telling me knock-knock jokes`,
    `stole my bycicle`,
    `died in front of me`,
    `ran me over with a dieselbackhoe`,
    `posted my nudes on Instagram`,
    `stabbed me`,
    `gave me a treasure map of The Mushroom Kingdom`,
    `tried to kill me with an enormous axe`,
    `created a portal to hell`,
    `stole my identity`,
    `gave me a speech about how to be a better person`,
    `pissed in my shoes while I was sleeping`
];

const htmlElemReference = document.querySelector(`#excuse-display`);

// function declaration
function getRandomElement(optionsArray) {
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomIndex];
}

// function declaration
function displayNewQuote(){
    const randomLeadInText = getRandomElement(leadIn);
    const randomPerpetratorText = getRandomElement(perpetrator);
    const delayingFactorText = getRandomElement(delayingFactor);

    htmlElemReference.textContent = `${randomLeadInText} ${randomPerpetratorText} ${delayingFactorText}!`;    
}