let x = 10;

function outer () {
    let x = 20;
    function inner() {
        return x;
    }

    return inner(); // 20;
}

let result = outer(); // 20

console.log(result);
// 예상 답변