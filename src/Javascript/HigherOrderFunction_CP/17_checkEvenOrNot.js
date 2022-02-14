function checkEvenOrNot(arr) {
    // TODO: 여기에 코드를 작성합니다.

    // 각 요소가 2의 배수
    // 0은 2의 배수가 아니다.

    // arr[i] > 0
    // 'no' , 'ok'로 출력 2의 배수가 'ok'
    return arr.map(function(el){
        if(el % 2 === 0 && el !== 0){
            return 'ok'
        } else {
            return 'no';
        }
    });
}
