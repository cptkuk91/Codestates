function getNthElement(arr, index) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0){
        return undefined;
    } else if(arr.length -1 < index){
        return 'out of index range';
    } else {
        return arr[index];
    }
}
