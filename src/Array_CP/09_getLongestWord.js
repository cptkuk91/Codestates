function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let words = str.split(' ');

    let max = words[0];
    for (let word of words) {
        if (word.length > max.length) {
            max = word;
        }
    }

    return max;
}
//
// function getLongestWord(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 어려움
//     // 일단 split 통해서 전부 나눠주기
//     let result = str.split(' ');
//     // I, love, codeStates
//
//     let result2 = result[0];
//     // result2 = I
//     for(let element of result){
//         // I, love, Codestates
//         if(element.length > result2.length){
//             // love > I
//             // CodeStates > I
//             result2 = element;
//         }
//     }
//     return result2;
// }
