function drop(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0 || num === 0){
        return arr;
    }

    let tail = arr.slice(1);
    // num 2
    // 1, -2, 1, 3
    return drop(num -1, tail);
    // ??
}
