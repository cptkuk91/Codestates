let x = 30;

function get(x){
    return x;
}

function set(value){
    x = value;
}

set(10);
let result = get(20);

console.log(result);