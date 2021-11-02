function lessThan100(number) {
    return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    if(Array.isArray(obj[property])){
        return obj[property].filter(function(el){
            return typeof el === 'number' && lessThan100(el);
        })
    };
    return result;
}