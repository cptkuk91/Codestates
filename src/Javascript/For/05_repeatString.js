function repeatString(str, num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';

    if (str === '') {
        return '';
    }

    for (let i = 0; i < num; i++) {
        result = result + str;
    }

    return result;
}