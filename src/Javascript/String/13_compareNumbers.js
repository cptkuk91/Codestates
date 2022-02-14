function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return num1 + '은(는) ' + num2 + '보다 큽니다';
    } else if (num1 < num2) {
        return num1 + '은(는) ' + num2 + '보다 작습니다';
    } else {
        return '두 수는 같습니다';
    }
}