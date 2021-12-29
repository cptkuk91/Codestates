const person = {
    nickname : "julia",
    age : '20'
}

// Bad Code
function displayPerson(person){
    displayName(person.nickname);
    displayAge(person.age);
}

// Bad Code
function displayPerson(person){
    const name = person.nickname;
    const age = person.age;
    displayName(name);
    displayAge(age);
}

// Good Code
function showPerson(person){
    const {nickname, age} = person;
    showName(nickname);
    showAge(age);
}