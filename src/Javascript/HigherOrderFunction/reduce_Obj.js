function makeAddressBook(addressBook, user){
    let firstLetter = user.name[0];

    if(firstLetter in addressBook){
        addressBook[firstLetter].push(user);
    } else {
        addressBook[firstLetter] = [];
        addressBook[firstLetter].push(user);
    }

    return addressBook;
}

let users = [
    { name: 'KJ', age: 40},
    { name: 'SJ', age: 30},
    { name: 'UH', age: 50}
];

console.log(users.reduce(makeAddressBook, {}));
//{
//    K: [ { name: 'KJ', age: 40} ],
//    S: [ { name: 'SJ', age: 30} ],
//    U: [ { name: 'UH', age: 50} ],
//} 출력