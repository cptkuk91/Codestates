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
