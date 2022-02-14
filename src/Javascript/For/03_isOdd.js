function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num < 0) {
        num = -num;
    }
    // * / % 사용 금지니까 위와 같이

    while (num >= 0) {
        if (num === 0) {
            return false;
        } else if (num === 1) {
            return true;
        }

        num = num - 2;
    }
}
