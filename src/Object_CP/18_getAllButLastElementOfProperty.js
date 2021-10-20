// function getAllButLastElementOfProperty(obj, key) {
//     // TODO: 여기에 코드를 작성합니다.
//     if(!Array.isArray(obj[key]) || obj[key] === 0){
//         return [];
//     } else {
//         return obj[key].slice(0, -1);
//     }
// }

function getAllButLastElementOfProperty(obj, key) {
    // TODO: 여기에 코드를 작성합니다.
    // 키가 배열인 경우를 생각해라
    let result = [];
    if(Array.isArray(obj[key])){
        result = obj[key].slice(0, obj[key].length -1);
    }
    return result;
}
