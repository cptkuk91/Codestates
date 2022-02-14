function sum(...theArgs){
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1,2,3)); // 6을 반환
console.log(sum(1,2,3,4)); // 10을 반환
