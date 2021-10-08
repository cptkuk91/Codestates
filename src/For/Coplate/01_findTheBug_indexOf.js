function findTheBug(word) {
    // TODO: 여기에 코드를 작성합니다.
    for(let i = 0; i <= word.length; i++) {
        if(word.includes('#')){
            return word.indexOf('#');
        } else {
            return undefined;
        }
    }
}
