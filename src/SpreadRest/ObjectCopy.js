let obj1 = {foo: 'bar', x: 42};
let obj2 = {foo: 'baz', y: 13};

let clonedObj = {...obj1};
console.log(clonedObj); // foo: 'bar', x: 42 출력
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj); // foo: 'baz', x: 42, y: 13 출력
// ojb1의 foo를 obj2 foo가 덮어 써버림