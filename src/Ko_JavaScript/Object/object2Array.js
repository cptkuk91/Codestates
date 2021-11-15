let prices = {
    banana: 1,
    apple: 2,
    meat: 4
}

let newArr = Object.entries(prices).map(([key, value]) => [key, value * 2]);
console.log(newArr); // [[ 'banana', 2 ], [ 'apple', 4 ], [ 'meat', 8 ]]