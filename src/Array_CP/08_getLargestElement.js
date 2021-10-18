function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = arr[0];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -1; j++) {
            if(arr[i] > arr[j]){
                result = arr[i];
            } else if (arr[i] < arr[j]){
                result = arr[j];
            }
        }
    }
    return result;
}
