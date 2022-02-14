function extend(obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
    for(let key in obj2){
        if(!(key in obj1)){
            obj1[key] = obj2[key];
        }
    }
}

// function extend(obj1, obj2) {
//     // TODO: 여기에 코드를 작성합니다.
//     for(let prop in obj2){
//         if(!(prop in obj1)){
//             obj1[prop] = obj2[prop];
//         }
//     }
// }
