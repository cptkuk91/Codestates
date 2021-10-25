function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    for(let i = 0; i <= num; i++){
        if(i === 0){
            result.push(0);
        } else if(i === 1){
            result.push(1);
        } else {
            result.push(result[i-2] + result[i-1]);
        }
    }

    return result;
}


// function fibonacci(num) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = [];
//     for(let i = 0; i <= num; i++){
//         if(i === 0){
//             result.push(0);
//         } else if(i === 1){
//             result.push(1);
//         } else {
//             result.push(result[i-2] + result[i-1]);
//         }
//     }
//     return result;
// }
