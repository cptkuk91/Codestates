let add = function(x) {
    let sum = function(y) {
        return x + y;
    }
    return sum;
}

let foo = add(1); // x = 1;
foo(3); // 4
let total = foo(6); // 7 x는 1 그대로 저장된 상태
console.log(total);