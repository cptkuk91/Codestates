// Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birth: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

let json2 = JSON.stringify(rabbit);
console.log(json2);

// JSON to Object
// parse(json)
const obj = JSON.parse(json2);
console.log(obj);