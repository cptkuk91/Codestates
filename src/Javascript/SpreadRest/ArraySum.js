let parts = ['body', 'face'];
let sports = ['soccer', ...parts, 'basketball', 'football'];

console.log(sports); // [ 'soccer', 'body', 'face', 'basketball', 'football' ] 출력

let arr1 = [0,1,2];
let arr2 = [3,4,5];

arr1 = [...arr1, ...arr2];
console.log(arr1); // 0,1,2,3,4,5 출력