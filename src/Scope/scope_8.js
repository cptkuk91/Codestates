let x = 10;

function outer() {
    let x = 20;

    function inner() {
        x = x + 10; // x = 30;
        return x; // 30
        console.log(x);
    }
    inner();
    console.log(x);
}

outer(); // 30

let result = x; // 속임수에 속지말자
console.log(result);

