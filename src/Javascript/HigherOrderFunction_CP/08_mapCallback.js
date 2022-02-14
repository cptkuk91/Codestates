function mapCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];

    for(let el of arr){
        result.push(func(el));
    }
    return result;
}

