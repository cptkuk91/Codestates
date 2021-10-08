function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.

    // for 문을 사용해야 한다.
    // 수를 입력받아 해당 수 까지의 합을 리턴해야한다. 0부터
    let result = 0;
    for(let i = 0; i <= num; i++){
        result += i;
    }
    return result;
}
