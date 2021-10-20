function countAllCharacters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {};
    for(let i = 0; i < str.length; i++){
        if(!result.hasOwnProperty(str[i])){
            result[str[i]] = 1; // 없을 때 하나를 추가해준다.
        } else { // 있으면;
            result[str[i]]++;
        }
    }
    return result;
}

// function countAllCharacters(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = {};
//     for(let i = 0; i < str.length; i++){
//         if(!(result[str[i]])){
//             result[str[i]] = 1;
//         } else {
//             result[str[i]]++;
//         }
//     }
//     return result;
// }
