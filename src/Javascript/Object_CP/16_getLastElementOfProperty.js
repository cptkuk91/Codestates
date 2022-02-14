function getLastElementOfProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    let prop = obj[property];
    if(!Array.isArray(prop) || prop.length === 0){
        return undefined;
    }
    return prop[prop.length -1];
}

// function getLastElementOfProperty(obj, property) {
//   let prop = obj[property];
//   if (!Array.isArray(prop) || prop.length === 0) {
//     return undefined;
//   }

//   return prop[prop.length - 1];
// }