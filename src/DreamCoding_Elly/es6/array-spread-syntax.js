let fruits = ['apple', 'banana', 'melon'];

fruits.push('water');
console.log(fruits);

// spread syntax를 이용한 추가
fruits = [...fruits, 'react'];
console.log(fruits);

// spread syntax를 이용한 앞쪽 추가
fruits = ['covid', ...fruits];
console.log(fruits);

let fruits2 = ['hello', 'world'];
let result = fruits.concat(fruits2)
console.log(result);

result = [...fruits, ...fruits2];
console.log(result);