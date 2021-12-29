// bad code
function getResult(score){
    let result;
    if(score > 5){
        result = 'Good';
    } else {
        result = 'Bad';
    }
    return result;
}
console.log(getResult(6));

// Good Code
function getResult(score){
    return score > 5 ? 'Good' : 'Bad';
}

console.log(getResult(4));