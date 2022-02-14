function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if(Array.isArray(anything)){
        return 'array';
    } else if(anything === null){
        return 'null';
    } else {
        return typeof anything;
    }
}
