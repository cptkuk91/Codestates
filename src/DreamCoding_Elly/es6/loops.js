const items = [1,2,3,4,5,6];

// filter
function getAllEvens(items){
    return items.filter((num) => num % 2 === 0)
}

// console.log(getAllEvens(items));

// map
function multiplyByFour(items){
    return items.map((num) => num * 4);
}

// console.log(multiplyByFour(items));

// reduce
function sumArray(items){
    return items.reduce((a, b) => a + b, 0);
}

// console.log(sumArray(items));

// loop chaining
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a+b, 0);
console.log(result);