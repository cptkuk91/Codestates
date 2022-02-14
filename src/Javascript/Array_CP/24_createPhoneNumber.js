function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = "(010)";
    let len = arr.length;
    let body = arr.slice(len - 8, len -4).join('');
    let tail = arr.slice(len -4, len).join('');

    if(len === 11){
        result = `(${arr.slice(0, 3).join('')})`;
    }

    return `${result}${body}-${tail}`;

}


// function createPhoneNumber(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     if(arr.length === 8){
//         return `(010)${arr.slice(0, 4).join('')}-${arr.slice(4, 8).join('')}`;
//     } else if(arr.length === 11){
//         return `(${arr.slice(0,3).join('')})${arr.slice(3, 7).join('')}-${arr.slice(7,11).join('')}`;
//     }
// }
