let x = 10;
function add(y){
    return x + y;
}

function strangeAdd(x){
    return add(x) + add(x);
}

let result = strangeAdd(5);
console.log(result);