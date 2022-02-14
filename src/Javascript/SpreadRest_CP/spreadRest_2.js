function findBiggestArg(...args){
    let biggestArg = 0;
    for(let i = 0; i < args.length; i++) {
        if(biggestArg < args[i]){
            biggestArg = args[i];
        }
    }
    return biggestArg;
}

let value = findBiggestArg(10, 30, 40, 20);
console.log(value);