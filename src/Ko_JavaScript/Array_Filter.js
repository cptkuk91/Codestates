let users = [
    {id: 1, name: "KJ"},
    {id: 2, name: "SJ"},
    {id: 3, name: "SH"}
]

let filterUser = users.filter(item => item.id < 3);

console.log(filterUser.length); // 2 출력
console.log(filterUser);
// {id: 1, name: "KJ"}, {id: 2, name: "SJ"}