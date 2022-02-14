function makeDigits2(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 1;
    let i = 2;
    while(i <= num){
        result += `-${i}`;
        i++;
    }
    return String(result);
}
