function addOneSecond(hour, minute, second) {
    if (second === 59) {
        minute += 1;
        second = 0;
    } else {
        second += 1;
    }

    if (minute === 60) {
        hour += 1;
        minute = 0;
    }

    if (hour === 24) {
        hour = 0;
    }

    return '1초 뒤에 ' + hour + '시 ' + minute + '분 ' + second + '초 입니다';
}