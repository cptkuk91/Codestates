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