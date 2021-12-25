// 함수 선언
// 함수 호출


// 함수 선언
function doSomething(add) {
    console.log(add);
    let result = add(2,3);
    console.log(result);
}

// 함수 호출 
// doSomething();

function add(a, b) {
    const sum = a + b;
    return sum;
}

// let result = add(1, 2);
// console.log(result);

// doSomething(add(2,3));
// doSomething(add);

const addFun = add;
console.log(addFun);
console.log(addFun(1, 2));