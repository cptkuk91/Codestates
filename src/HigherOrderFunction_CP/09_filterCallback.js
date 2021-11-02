function filterCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];

    for(let el of arr){
        if(func(el)){
            result.push(el);
        }
    }
    return result;
}