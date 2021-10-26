function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    let string = str.split(' ');
    if(str.length === 0){
        return '';
    }
    for(let i = 0; i < string.length; i++){
        result += string[i][0];
    }
    return result;
}
