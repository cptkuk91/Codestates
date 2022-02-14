function getDoubledElements(arr) {
    // TODO: 여기에 코드를 작성합니다.

    // 2배 곱한 새로운 배열 리턴
    // map 을 사용해야 한다.
    // 빈 배열은 빈 배열을 리턴
    let result = arr.map(function(el){
        return (el*2)
    });
    return result;
}
