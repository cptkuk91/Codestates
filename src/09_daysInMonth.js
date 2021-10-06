function daysInMonth(month) {
    // TODO: 여기에 코드를 작성합니다.
    if(month === 2){
        return 28
    } else if (month === 4 || month === 6 || month === 9 || month === 11){
        return 30
    } else {
        return 31
    }
}
