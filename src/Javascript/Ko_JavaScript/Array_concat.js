let arr = [1,2];

console.log(arr.concat([3,4]));
// 1,2,3,4 출력

console.log(arr.concat([3,4], [5,6]));
// 1,2,3,4,5,6 출력

console.log(arr.concat([3,4], 5, 6));
// 1,2,3,4,5,6 출력