function findTheBug(word) {
    // TODO: 여기에 코드를 작성합니다.
    // 반복문 사용
    // # 없는 경우 undefined
    for(let i = 0; i < word.length; i++){
        if(word.includes('#')){
            return word.indexOf('#');
        } else {
            return undefined;
        }
    }
}
