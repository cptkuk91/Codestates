function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
    // TODO: 여기에 코드를 작성합니다.
    if(Array.isArray(obj[key]) === false){
        return undefined;
    }
    return arrProperty[index];
}
