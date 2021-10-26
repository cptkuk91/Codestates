function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    let rate = 1 + interestRate/100;
    let origin = 1;
    let year = 0;
    while(origin < 2){
        origin *= rate;
        year++;
    }
    return year;
}
