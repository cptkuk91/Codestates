let x = 10;

function outer () {
    x = 20;
    function inner() {
        x = x + 20; // x 40;
    }
    inner();
}

outer(); // x 40
// outer에서 x 의 값이 새롭게 적용됨
let result = x;
console.log(result);