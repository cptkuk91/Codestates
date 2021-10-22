function sum(x, y, z){
    return x + y + z;
}

const numbers = [1,2,3];

sum(...numbers);

console.log(sum(...numbers)); // 6을 출력함