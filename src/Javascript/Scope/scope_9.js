let x = 10;

function outer () {
    x = 20;

    function inner () {
        let x; // 새롭게 선언됐기 때문에 위에 x를 무시해버린다.
        x = x + 40; // 따라서 x = 20 이 된다.
        return x;
    }
    inner();
    console.log(x);
}

outer();

let result = x;
console.log(result);