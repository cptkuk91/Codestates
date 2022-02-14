function getFirstElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    for(let i = 0; arr.length > 0; i++) {
        return arr[i];
        if(arr[i] === undefined){
            return undefined;
        }
    }
}
