function printObject(obj) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    for(let key in obj){
        result += key + ': ' + obj[key] + '\n';
    }
    return result;
}
