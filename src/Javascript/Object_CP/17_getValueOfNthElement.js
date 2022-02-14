function getValueOfNthElement(arr, num) {
    // TODO: 여기에 코드를 작성합니다.
    // 빈 배열은 no name;
    // 해당되는 객체는 속성값 출력
    // 배열의 범위를 벗어나면 'name' 속성값 출력;
    if(arr.length === 0){
        return 'no name';
    } else if(num >= arr.length){
        return arr[arr.length -1]['name'];
    } else {
        return arr[num]['name'];
    }
}



// function getValueOfNthElement(arr, num) {
//   if (!arr.length) {
//     return 'no name';
//   } else if (num > arr.length - 1) {
//     return arr[arr.length - 1]['name'];
//   } else {
//     return arr[num]['name'];
//   }
// }