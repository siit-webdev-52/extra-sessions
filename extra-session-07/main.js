console.log('main.js loaded...');

const displayElem = document.querySelector('#display');


function createCard(student) {
    console.log(student);

    // creates the card div
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    displayElem.append(newCard);

    // adds the h2 element
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = student.name;
    newCard.append(h2Elem);

    let avatar = document.createElement('img');
    avatar.src = `https://api.dicebear.com/9.x/bottts/svg?seed=${student.name}`;
    newCard.append(avatar);

    // adds the info div element
    let infoDivElem = document.createElement('div');
    infoDivElem.classList.add('info');
    newCard.append(infoDivElem);

    // adds the ul element
    let ulElem = document.createElement('ul');
    infoDivElem.append(ulElem);

    // adds the li elements
    let liElem = document.createElement('li');
    liElem.textContent = `Gender: ${student.gender}`;
    ulElem.append(liElem);

    liElem = document.createElement('li');
    liElem.textContent = `Age: ${student.age}`;
    ulElem.append(liElem);

    liElem = document.createElement('li');
    liElem.textContent = `Location: ${student.location}`;
    ulElem.append(liElem);

    liElem = document.createElement('li');
    liElem.textContent = `Grade: ${student.grade}`;
    ulElem.append(liElem);
}


const students = [
    {
        name: 'Adi',
        age: 45,
        gender: 'male',
        location: 'Brasov',
        grade: 8.15
    },
    {
        name: 'Ana',
        age: 25,
        gender: 'female',
        location: 'Cluj-Napoca',
        grade: 9.65
    },
    {
        name: 'Ion',
        age: 63,
        gender: 'male',
        location: 'Timisoara',
        grade: 7.12
    },
    {
        name: 'Marinel',
        age: 7,
        gender: 'male',
        location: 'Husi',
        grade: 6.18
    },
    {
        name: 'Gingirica',
        age: 9,
        gender: 'female',
        location: 'Arad',
        grade: 9.99
    },
    {
        name: 'Pamela',
        age: 19,
        gender: 'female',
        location: 'Arad',
        grade: 8.88
    }
];

for (let i = 0; i < students.length; i++) {
    createCard(students[i]);
}