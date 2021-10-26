function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 2^0 = 1
    // 2^2 = 4
    // 2^3 = 8
    while(num >= 1){
        if(num === 1){
            return true;
        } else {
            num = num / 2;
        }
    }
    return false;
}
