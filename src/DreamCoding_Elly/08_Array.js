// Array

// 1. Declaration
// const arr1 = new Array();
// const arr2 = [1,2,3];

// // 2. Index Position
const fruits = ['apple', 'banana'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for of 를 통한 array 출력
for(let fruit of fruits){
    console.log(fruit);
}

// forEach 를 사용한 array 출력
fruits.forEach((el, index) => {
    console.log(el, index);
});

// 4. Addition, delletion, copy
// push, pop
fruits.push('melon', 'cola');
console.log(fruits);

fruits.pop();
console.log(fruits);

// add an item to the begin (unshift)
fruits.unshift('zerocoke', 'node');
console.log(fruits);
// remove an item from the begin (shift)
fruits.shift();
console.log(fruits);

// 특정 위치 삭제하기  (splice)
fruits.splice(1,2, 'dream', 'coding');
console.log(fruits);

// 배열 합치기 
const fruits2 = ['hello', 'world'];
let fruits3 = fruits.concat(fruits2);
console.log(fruits3);

// Searching (indexOf)
// find the index
console.log(fruits3.indexOf('hello'));
console.log(fruits3.indexOf('hello2')); // 배열안에 찾는 값이 없을 경우 -1 을 반환한다. 

// 포함됐는지 확인하는 방법 (includes);
console.log(fruits3.includes('coconut'));

// lastIndexOf
// 중복된 데이터가 있을 경우 처음에 위치해있을 수 있고, 마지막에 위치해 있을 수도 있다.
fruits3.push('hello');
console.log(fruits3);
console.log(fruits3.lastIndexOf('hello'));