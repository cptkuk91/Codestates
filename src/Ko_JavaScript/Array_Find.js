let users = [
    {id: 1, name: "KJ"},
    {id: 2, name: "SJ"},
    {id: 3, name: "SH"}
];

let user = users.find(item => item.id == 1);

console.log(user.name);