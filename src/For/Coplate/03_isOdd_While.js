function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num < 0) {
        num = -num;
    }

    while (num >= 0) {
        if (num == 0) {
            return false;
        } else if (num == 1) {
            return true;
        }
        num = num - 2;
    }
}
