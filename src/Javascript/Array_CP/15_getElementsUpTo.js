function getElementsUpTo(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let arr2 = [];
    if(n >= arr.length) {
        return arr2;
    }

    return arr.slice(0, n);
}
