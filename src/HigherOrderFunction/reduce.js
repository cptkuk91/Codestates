function joinName(resultStr, user) {
    resultStr = resultStr + user.name + ', ';
    return resultStr;
}

let users = [
    { name: 'Tim', age: 40 },
    { name: 'Satya', age: 30 },
    { name: 'Sundar', age: 50 }
];

console.log(users.reduce(joinName, '')); // Tim, Satya, Sundar, 출력