function makeMultiplesOfDigit(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    for(let i = 3; i <= num; i +=3){
        result += i;
    }
    return String(result);
}
