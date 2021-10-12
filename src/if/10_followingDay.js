function followingDay(day) {
    // TODO: 여기에 코드를 작성합니다.
    if(day === '월요일'){
        return '화요일'
    } else if(day === '화요일'){
        return '수요일'
    } else if(day === '수요일'){
        return '목요일'
    } else if(day === '목요일'){
        return '금요일'
    } else if(day === '금요일'){
        return '토요일'
    } else if(day === '토요일'){
        return '일요일'
    } else if(day === '일요일'){
        return '월요일'
    } else {
        return "올바른 요일이 아닙니다"
    }
}
