function select(arr, obj) {
    // TODO: 여기에 코드를 작성합니다.
    let newObj = {};
    for(let prop in obj){
        for(let i = 0; i < arr.length; i++){
            if(prop === arr[i]){
                newObj[prop] = obj[prop];
            }
        }
    }
    return newObj;
}

// function select(arr, obj) {
//   let newObj = {};
//   for (let prop in obj) {
//     for (let i = 0; i < arr.length; i++) {
//       if (prop === arr[i]) {
//         newObj[prop] = obj[prop];
//       }
//     }
//   }
//   return newObj;
// }